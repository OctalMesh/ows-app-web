import { DEFAULT_LOCALE } from "@shared/i18n";

import { importMdx } from "./import-mdx";

export async function getMdxMetadata<T = Record<string, unknown>>(
  path: string,
  locale: Locale = DEFAULT_LOCALE,
): Promise<T | null> {
  const mod = await importMdx(path, locale);

  return (mod?.metadata as T) ?? null;
}
