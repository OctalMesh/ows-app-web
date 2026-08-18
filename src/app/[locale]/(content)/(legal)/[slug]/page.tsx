import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Article } from "@widgets/article";

import { routing } from "@shared/i18n";
import { getMdxContent, getMdxMetadata, getMdxSlugs } from "@shared/lib/server";

const COLLECTION: string = "legal" as const;

interface Props {
  params: Promise<{ locale: Locale; slug: string }>;
}

interface LegalMetadata {
  title: string;
  description: string;
}

export function generateStaticParams(): {
  locale: Locale;
  slug: string;
}[] {
  return routing.locales.flatMap((locale) =>
    getMdxSlugs(COLLECTION).map((slug) => ({
      locale,
      slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const meta = await getMdxMetadata<LegalMetadata>(
    `${COLLECTION}/${slug}`,
    locale as Locale,
  );

  return {
    title: meta?.title,
    description: meta?.description,
  };
}

export default async function LegalPage({ params }: Props) {
  const { locale, slug } = await params;
  const content = await getMdxContent(COLLECTION, slug, locale);

  if (!content) {
    notFound();
  }

  return (
    <Article>
      <Article.Toc headings={content.tableOfContents ?? []} />

      <Article.Content>
        <content.default />
      </Article.Content>
    </Article>
  );
}
