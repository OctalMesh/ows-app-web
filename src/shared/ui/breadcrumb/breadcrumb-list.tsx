"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type BreadcrumbListProps = ComponentProps<"ol">;

export function BreadcrumbList({
  className,
  ...props
}: BreadcrumbListProps): JSX.Element {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  );
}
