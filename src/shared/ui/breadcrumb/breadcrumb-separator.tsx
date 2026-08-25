"use client";

import type { ComponentProps, JSX } from "react";

import { IconChevronRight } from "@tabler/icons-react";

import { cn } from "@shared/lib/cn";

export type BreadcrumbSeparatorProps = ComponentProps<"li">;

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps): JSX.Element {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <IconChevronRight />}
    </li>
  );
}
