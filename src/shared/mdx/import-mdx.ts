import "server-only";

import { cache } from "react";

import { DEFAULT_LOCALE, isValidLocale } from "@shared/i18n";

import { MdxModule } from "./mdx-module";

export const importMdx = cache(
  async (path: string, locale: Locale): Promise<MdxModule | null> => {
    const resolvedLocale = isValidLocale(locale) ? locale : DEFAULT_LOCALE;

    return (
      (await tryImport(path, resolvedLocale)) ??
      (resolvedLocale !== DEFAULT_LOCALE
        ? await tryImport(path, DEFAULT_LOCALE)
        : null)
    );
  },
);

export async function tryImport(
  path: string,
  locale: Locale,
): Promise<MdxModule | null> {
  try {
    return (await import(`@content/${locale}/${path}.mdx`)) as MdxModule;
  } catch {
    return null;
  }
}
