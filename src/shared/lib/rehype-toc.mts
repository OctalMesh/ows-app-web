import { valueToEstree } from "estree-util-value-to-estree";
import type { Element, Root, RootContent } from "hast";
import { toString } from "hast-util-to-string";
import { visit } from "unist-util-visit";

interface FlatHeading {
  id: string;
  text: string;
  level: number;
}

interface TocHeading extends FlatHeading {
  children: TocHeading[];
}

interface MdxjsEsmNode {
  type: "mdxjsEsm";
  value: string;
  data: {
    estree: Record<string, unknown>;
  };
}

const HEADING_TAGS = new Set(["h2", "h3", "h4", "h5", "h6"]);

function buildTocTree(flatHeadings: FlatHeading[]): TocHeading[] {
  const root: TocHeading[] = [];
  const stack: TocHeading[] = [];

  for (const heading of flatHeadings) {
    const node: TocHeading = { ...heading, children: [] };

    while (stack.length > 0 && stack[stack.length - 1]!.level >= node.level) {
      stack.pop();
    }

    if (stack.length === 0) {
      root.push(node);
    } else {
      stack[stack.length - 1]!.children.push(node);
    }

    stack.push(node);
  }

  return root;
}

export default function rehypeToc(): (tree: Root) => void {
  return (tree: Root) => {
    const flatHeadings: FlatHeading[] = [];

    visit(tree, "element", (node: Element) => {
      if (!HEADING_TAGS.has(node.tagName)) {
        return;
      }

      const id = node.properties?.id;

      if (typeof id !== "string") {
        return;
      }

      flatHeadings.push({
        id,
        text: toString(node),
        level: Number(node.tagName.slice(1)),
      });
    });

    const tocTree = buildTocTree(flatHeadings);

    const mdxEsmNode: MdxjsEsmNode = {
      type: "mdxjsEsm",
      value: "",
      data: {
        estree: {
          type: "Program",
          sourceType: "module",
          body: [
            {
              type: "ExportNamedDeclaration",
              declaration: {
                type: "VariableDeclaration",
                kind: "const",
                declarations: [
                  {
                    type: "VariableDeclarator",
                    id: { type: "Identifier", name: "tableOfContents" },
                    init: valueToEstree(tocTree),
                  },
                ],
              },
              specifiers: [],
              source: null,
            },
          ],
        },
      },
    };

    tree.children.unshift(mdxEsmNode as unknown as RootContent);
  };
}
