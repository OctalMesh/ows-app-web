import "server-only";

import { readdirSync } from "node:fs";
import { join } from "node:path";

import { cache } from "react";

import type { TocHeading } from "*.mdx";
import type { MDXContent } from "mdx/types";

import { DEFAULT_LOCALE, isValidLocale } from "@shared/i18n";

export interface MdxModule {
  default: MDXContent;
  metadata?: unknown;
  tableOfContents?: TocHeading[];
}

export async function getMdxContent(
  collection: string,
  slug: string,
  locale: Locale = DEFAULT_LOCALE,
): Promise<MdxModule | null> {
  return importMdx(`${collection}/${slug}`, locale);
}

export async function getMdxMetadata<T = Record<string, unknown>>(
  path: string,
  locale: Locale = DEFAULT_LOCALE,
): Promise<T | null> {
  const mod = await importMdx(path, locale);

  return (mod?.metadata as T) ?? null;
}

export function getMdxSlugs(
  collection: string,
  locale: Locale = DEFAULT_LOCALE,
): string[] {
  const dir = join(
    process.cwd(),
    `src/shared/assets/content/${locale}/${collection}`,
  );

  return readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

const importMdx = cache(
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

async function tryImport(
  path: string,
  locale: Locale,
): Promise<MdxModule | null> {
  try {
    return (await import(
      `@shared/assets/content/${locale}/${path}.mdx`
    )) as MdxModule;
  } catch {
    return null;
  }
}
