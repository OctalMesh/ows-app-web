"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type BreadcrumbPageProps = ComponentProps<"span">;

export function BreadcrumbPage({
  className,
  ...props
}: BreadcrumbPageProps): JSX.Element {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  );
}
