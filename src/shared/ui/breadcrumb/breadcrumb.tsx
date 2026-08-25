"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type BreadcrumbProps = ComponentProps<"nav">;

export function Breadcrumb({
  className,
  ...props
}: BreadcrumbProps): JSX.Element {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={cn(className)}
      {...props}
    />
  );
}
