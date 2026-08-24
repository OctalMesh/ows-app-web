import { JSX, Suspense } from "react";

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Article } from "@widgets/article";

import { routing } from "@shared/i18n";
import { getMdxContent, getMdxMetadata, getMdxSlugs } from "@shared/lib/server";

const COLLECTION: string = "legal" as const;

interface ArticleProps {
  params: Promise<{ locale: Locale; slug: string }>;
}

interface ArticleMetadata {
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

export async function generateMetadata({
  params,
}: ArticleProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const meta = await getMdxMetadata<ArticleMetadata>(
    `${COLLECTION}/${slug}`,
    locale as Locale,
  );

  return {
    title: meta?.title,
    description: meta?.description,
  };
}

async function ArticleContent({ params }: ArticleProps): Promise<JSX.Element> {
  const { locale, slug } = await params;
  const content = await getMdxContent(COLLECTION, slug, locale);

  if (!content) {
    notFound();
  }

  return (
    <>
      <Article.Toc headings={content.tableOfContents ?? []} />

      <Article.Content>
        <content.default />
      </Article.Content>
    </>
  );
}

export default function ArticlePage({ params }: ArticleProps): JSX.Element {
  return (
    <Article>
      <Suspense
        fallback={
          <>
            <Article.TocSkeleton />
            <Article.ContentSkeleton />
          </>
        }
      >
        <ArticleContent params={params} />
      </Suspense>
    </Article>
  );
}
