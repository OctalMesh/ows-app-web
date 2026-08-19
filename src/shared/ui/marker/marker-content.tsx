"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type MarkerContentProps = ComponentProps<"span">;

export function MarkerContent({
  className,
  ...props
}: MarkerContentProps): JSX.Element {
  return (
    <span
      data-slot="marker-content"
      className={cn(
        "min-w-0 wrap-break-word group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}
