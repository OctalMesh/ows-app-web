"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type EmptyTitleProps = ComponentProps<"div">;

export function EmptyTitle({
  className,
  ...props
}: EmptyTitleProps): JSX.Element {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-lg font-medium tracking-tight", className)}
      {...props}
    />
  );
}
