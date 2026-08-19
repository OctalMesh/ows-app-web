"use client";

import type { ComponentProps, JSX } from "react";

import { IconChevronLeft } from "@tabler/icons-react";

import { cn } from "@shared/lib";

import { PaginationLink } from "./pagination-link";

export interface PaginationPreviousProps extends ComponentProps<
  typeof PaginationLink
> {
  text?: string;
}

export function PaginationPrevious({
  className,
  text = "Previous",
  ...props
}: PaginationPreviousProps): JSX.Element {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("pl-2!", className)}
      {...props}
    >
      <IconChevronLeft data-icon="inline-start" />
      <span className="hidden sm:block">{text}</span>
    </PaginationLink>
  );
}
