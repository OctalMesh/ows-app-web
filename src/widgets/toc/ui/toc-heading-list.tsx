"use client";

import { useMemo, useRef } from "react";

import { cn } from "@shared/lib";

import type { TocHeading } from "../model/heading";
import { buildHeadingTree } from "../model/heading";
import { TocIndicator } from "./toc-indicator";
import { TocSection } from "./toc-section";

export interface TocHeadingListProps {
  headings: TocHeading[];
  activeIds: Set<string>;
  onSelect: (id: string) => void;
  className?: string;
}

export function TocHeadingList({
  headings,
  activeIds,
  onSelect,
  className,
}: TocHeadingListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingTree = useMemo(() => buildHeadingTree(headings), [headings]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col border-l border-border/40",
        className,
      )}
    >
      <TocIndicator containerRef={containerRef} activeIds={activeIds} />

      {headingTree.map((heading) => (
        <TocSection
          key={heading.id}
          heading={heading}
          activeIds={activeIds}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
