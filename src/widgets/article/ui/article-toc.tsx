"use client";

import { usePathname } from "next/navigation";

import type { TocHeading } from "*.mdx";

import { cn } from "@shared/lib";

import { useArticleContext } from "../model";
import { useArticleToc } from "../model/use-article-toc";
import { ArticleTocDesktop } from "./article-toc-desktop";
import { ArticleTocMobile } from "./article-toc-mobile";

export interface ArticleTocProps {
  headings: TocHeading[];
  className?: string;
}

export function ArticleToc({ headings, className }: ArticleTocProps) {
  const pathname = usePathname();
  const { contentRef } = useArticleContext();

  const { activeIds, scrollToHeading } = useArticleToc({
    headings,
    contentRef,
    pageKey: pathname,
  });

  return (
    <div className={cn("w-96 lg:justify-self-end lg:px-8", className)}>
      <ArticleTocMobile
        headings={headings}
        activeIds={activeIds}
        onSelect={scrollToHeading}
      />

      <ArticleTocDesktop
        headings={headings}
        activeIds={activeIds}
        onSelect={scrollToHeading}
      />
    </div>
  );
}
