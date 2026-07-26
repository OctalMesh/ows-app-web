import fsModule from "node:fs";
import path from "node:path";
import pathModule from "node:path";
import { fileURLToPath } from "node:url";

import type { Rule } from "eslint";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettierModule from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";
import type { ImportDeclaration } from "estree";
import tseslint from "typescript-eslint";

//<editor-fold desc="Custom Plugins" defaultstate="collapsed">
const LAYER_WEIGHTS = {
  app: 0,
  pages: 1,
  widgets: 2,
  features: 3,
  entities: 4,
  shared: 5,
} as const;

type Layer = keyof typeof LAYER_WEIGHTS;

const LAYER_PATTERN =
  /src\/(app|pages|widgets|features|entities|shared)(?:\/([^/]+))?/;
const IMPORT_PATTERN =
  /^@(app|pages|widgets|features|entities|shared)\/([^/]+)(?:\/(.+))?/;
const INDEX_PATTERN = /^(index|server)(\.(ts|tsx|js|jsx))?$/;
const CROSS_SLICE_EXEMPT_LAYERS = new Set<Layer>(["shared", "app"]);
const PUBLIC_API_INDEX_ENTRY_LAYERS = new Set<Layer>(["app", "shared"]);
const RESOLVABLE_INDEX_FILES = [
  "index.ts",
  "index.tsx",
  "index.js",
  "index.jsx",
  "server.ts",
  "server.tsx",
];

function hasPublicDirectoryIndex(
  importPath: string,
  contextFilename: string,
  layer: Layer,
): boolean {
  const normalizedContextPath = contextFilename.replace(/\\/g, "/");
  const srcIndex = normalizedContextPath.lastIndexOf("/src/");

  if (srcIndex === -1) {
    return false;
  }

  const projectRoot = normalizedContextPath.slice(0, srcIndex);
  const layerPrefix = `@${layer}/`;
  if (!importPath.startsWith(layerPrefix)) {
    return false;
  }

  const relativeLayerPath = importPath.slice(layerPrefix.length);
  const targetDirectory = pathModule.join(
    projectRoot,
    "src",
    layer,
    relativeLayerPath,
  );

  if (
    !fsModule.existsSync(targetDirectory) ||
    !fsModule.statSync(targetDirectory).isDirectory()
  ) {
    return false;
  }

  return RESOLVABLE_INDEX_FILES.some((indexFile) =>
    fsModule.existsSync(pathModule.join(targetDirectory, indexFile)),
  );
}

// noinspection JSUnusedGlobalSymbols
const fsdPlugin = {
  rules: {
    "fsd-logic": {
      meta: {
        type: "problem" as const,
        messages: {
          publicApi:
            "FSD: Public API violation. Direct import of internal files is prohibited.",
          layerHierarchy:
            "FSD: Layer hierarchy violation. The [{{importLayer}}] layer cannot be imported from [{{currentLayer}}].",
          crossSlice:
            "FSD: Hierarchy violation. Importing between slices of the same layer [{{layer}}] is not allowed ({{importSlice}} <- {{currentSlice}}).",
        },
        schema: [],
      },
      create(context: Rule.RuleContext): Rule.RuleListener {
        const normalizedPath = (context.filename ?? "").replace(/\\/g, "/");
        const srcMatch = normalizedPath.match(LAYER_PATTERN);
        const currentLayer = srcMatch?.[1] as Layer | undefined;
        const currentSlice = srcMatch?.[2];

        // noinspection JSUnusedGlobalSymbols
        return {
          ImportDeclaration(node: ImportDeclaration) {
            const importPath: unknown = node.source.value;
            if (typeof importPath !== "string") {
              return;
            }

            const match = importPath.match(IMPORT_PATTERN);
            if (!match) {
              return;
            }

            const [, importLayerRaw, importSlice, internalPath] = match;
            const importLayer = importLayerRaw as Layer;

            if (
              currentLayer &&
              currentLayer in LAYER_WEIGHTS &&
              importLayer in LAYER_WEIGHTS
            ) {
              const currentWeight = LAYER_WEIGHTS[currentLayer];
              const importWeight = LAYER_WEIGHTS[importLayer];

              if (importWeight < currentWeight) {
                return context.report({
                  node,
                  messageId: "layerHierarchy",
                  data: { importLayer, currentLayer },
                });
              }

              if (
                currentLayer === importLayer &&
                !CROSS_SLICE_EXEMPT_LAYERS.has(currentLayer) &&
                currentSlice !== importSlice
              ) {
                return context.report({
                  node,
                  messageId: "crossSlice",
                  data: { layer: currentLayer, importSlice, currentSlice },
                });
              }
            }

            if (internalPath) {
              if (
                PUBLIC_API_INDEX_ENTRY_LAYERS.has(importLayer) &&
                hasPublicDirectoryIndex(
                  importPath,
                  context.filename ?? "",
                  importLayer,
                )
              ) {
                return;
              }

              if (!INDEX_PATTERN.test(internalPath)) {
                context.report({ node, messageId: "publicApi" });
              }
            }
          },
        };
      },
    },
  },
};
//</editor-fold>

/**
 * ESLint configuration
 *
 * @see {@link https://eslint.org/docs/latest/use/configure/configuration-files
 *      ESLint documentation}
 */
export default defineConfig([
  ...nextVitals, // https://web.dev/articles/vitals
  ...nextTs, // https://typescript-eslint.io

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "next-env.d.ts",
  ]),

  // TODO: Remove when https://github.com/vercel/next.js/issues/89764 is resolved
  {
    settings: {
      react: { version: "19" },
    },
  },

  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        projectService: true,
        tsconfigRootDir: path.dirname(fileURLToPath(import.meta.url)),
      },
    },
    extends: [
      ...tseslint.configs.recommendedTypeChecked, // https://typescript-eslint.io/users/configs/#recommended-type-checked
      ...tseslint.configs.stylisticTypeChecked, // https://typescript-eslint.io/users/configs/#stylistic-type-checked
    ],
    plugins: {
      fsd: fsdPlugin,
    },
    rules: {
      "fsd/fsd-logic": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },

  eslintConfigPrettierModule, // https://github.com/prettier/eslint-config-prettier#readme
]);
