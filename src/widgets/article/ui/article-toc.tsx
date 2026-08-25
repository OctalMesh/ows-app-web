"use client";

import type { JSX } from "react";

import { usePathname } from "next/navigation";

import type { TocHeading } from "*.mdx";

import { cn } from "@shared/lib/cn";

import { useArticle } from "../model";
import { useArticleToc } from "../model/use-article-toc";
import { ArticleTocDesktop } from "./article-toc-desktop";
import { ArticleTocMobile } from "./article-toc-mobile";

export interface ArticleTocProps {
  headings: TocHeading[];
  className?: string;
}

export function ArticleToc({
  headings,
  className,
}: ArticleTocProps): JSX.Element {
  const pathname = usePathname();
  const { contentRef } = useArticle();

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
