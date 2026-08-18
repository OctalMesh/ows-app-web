"use client";

import { useTranslations } from "next-intl";

import { TocHeading } from "*.mdx";

import { ScrollArea } from "@shared/ui/scroll";

import { ArticleTocList } from "./article-toc-list";
import { ArticleTocTitle } from "./article-toc-title";

export interface TocDesktopProps {
  headings: TocHeading[];
  activeIds: Set<string>;
  onSelect: (id: string) => void;
}

export function ArticleTocDesktop({
  headings,
  activeIds,
  onSelect,
}: TocDesktopProps) {
  const t = useTranslations("common.toc");

  return (
    <nav
      aria-label={t("title")}
      className="sticky top-0 flex h-dvh flex-col self-start pt-16 max-lg:hidden"
    >
      <ArticleTocTitle />

      <ScrollArea showBar={false} className="min-h-0 flex-1 pl-3">
        <ArticleTocList
          headings={headings}
          activeIds={activeIds}
          onSelect={onSelect}
          className="flex flex-col"
        />
      </ScrollArea>
    </nav>
  );
}
