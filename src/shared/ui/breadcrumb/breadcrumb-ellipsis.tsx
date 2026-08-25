"use client";

import type { ComponentProps, JSX } from "react";

import { IconDots } from "@tabler/icons-react";

import { cn } from "@shared/lib/cn";

export type BreadcrumbEllipsisProps = ComponentProps<"span">;

export function BreadcrumbEllipsis({
  className,
  ...props
}: BreadcrumbEllipsisProps): JSX.Element {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn(
        "flex size-5 items-center justify-center [&>svg]:size-4",
        className,
      )}
      {...props}
    >
      <IconDots />
      <span className="sr-only">More</span>
    </span>
  );
}
