"use client";

import { type JSX, useRef } from "react";

import { TocHeading } from "*.mdx";

import { cn } from "@shared/lib/cn";

import { ArticleTocIndicator } from "./article-toc-indicator";
import { ArticleTocSection } from "./article-toc-section";

export interface TocHeadingListProps {
  headings: TocHeading[];
  activeIds: Set<string>;
  onSelect: (id: string) => void;
  className?: string;
}

export function ArticleTocList({
  headings,
  activeIds,
  onSelect,
  className,
}: TocHeadingListProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col border-l border-border/40",
        className,
      )}
    >
      <ArticleTocIndicator containerRef={containerRef} activeIds={activeIds} />

      {headings.map((heading) => (
        <ArticleTocSection
          key={heading.id}
          heading={heading}
          activeIds={activeIds}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
