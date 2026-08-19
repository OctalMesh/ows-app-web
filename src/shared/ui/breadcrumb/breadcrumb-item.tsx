"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type BreadcrumbItemProps = ComponentProps<"li">;

export function BreadcrumbItem({
  className,
  ...props
}: BreadcrumbItemProps): JSX.Element {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}
