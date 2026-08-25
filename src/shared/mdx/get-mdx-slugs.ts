import "server-only";

import { readdirSync } from "node:fs";
import { join } from "node:path";

import { DEFAULT_LOCALE } from "@shared/i18n";

export function getMdxSlugs(
  collection: string,
  locale: Locale = DEFAULT_LOCALE,
): string[] {
  const dir = join(process.cwd(), `content/${locale}/${collection}`);

  return readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
