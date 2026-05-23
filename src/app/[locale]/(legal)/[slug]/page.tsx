import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { routing } from "@shared/i18n";
import { getMdxMetadata, getMdxSlugs, getPage } from "@shared/lib/server";

const COLLECTION: string = "legal" as const;

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

interface LegalMetadata {
  title: string;
  description: string;
}

export function generateStaticParams(): {
  locale: string;
  slug: string;
}[] {
  return routing.locales.flatMap((locale) =>
    getMdxSlugs(COLLECTION).map((slug) => ({
      locale: locale,
      slug: slug,
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
  const Content = await getPage(`${COLLECTION}/${slug}`, locale as Locale);

  if (!Content) {
    notFound();
  }

  return <Content />;
}
