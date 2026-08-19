"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type PaginationContentProps = ComponentProps<"ul">;

export function PaginationContent({
  className,
  ...props
}: PaginationContentProps): JSX.Element {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}
