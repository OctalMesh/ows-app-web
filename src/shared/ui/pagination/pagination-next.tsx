"use client";

import type { ComponentProps, JSX } from "react";

import { IconChevronRight } from "@tabler/icons-react";

import { cn } from "@shared/lib";

import { PaginationLink } from "./pagination-link";

export interface PaginationNextProps extends ComponentProps<
  typeof PaginationLink
> {
  text?: string;
}

export function PaginationNext({
  className,
  text = "Next",
  ...props
}: PaginationNextProps): JSX.Element {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("pr-2!", className)}
      {...props}
    >
      <span className="hidden sm:block">{text}</span>
      <IconChevronRight data-icon="inline-end" />
    </PaginationLink>
  );
}
