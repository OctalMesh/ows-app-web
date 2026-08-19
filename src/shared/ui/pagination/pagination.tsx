"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type PaginationProps = ComponentProps<"nav">;

export function Pagination({
  className,
  ...props
}: PaginationProps): JSX.Element {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}
