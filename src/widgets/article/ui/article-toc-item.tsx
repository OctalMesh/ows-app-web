"use client";

import type { JSX } from "react";

import { TocHeading } from "*.mdx";

import { cn } from "@shared/lib/cn";
import { Button } from "@shared/ui/button";

export interface TocItemProps {
  heading: TocHeading;
  isActive: boolean;
  onSelect: (id: string) => void;
  className?: string;
}

export function ArticleTocItem({
  heading,
  isActive,
  onSelect,
  className,
}: TocItemProps): JSX.Element {
  const isSubHeading = heading.level >= 3;

  return (
    <Button
      data-toc-id={heading.id}
      aria-current={isActive ? "location" : undefined}
      onClick={() => onSelect(heading.id)}
      variant="text"
      className={cn(
        "block truncate text-left transition-colors duration-400",
        isSubHeading ? "pl-8" : "pl-5",
        isActive && "text-primary",
        className,
      )}
    >
      {heading.text}
    </Button>
  );
}
