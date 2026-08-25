"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type ItemTitleProps = ComponentProps<"div">;

export function ItemTitle({
  className,
  ...props
}: ItemTitleProps): JSX.Element {
  return (
    <div
      data-slot="item-title"
      className={cn(
        "line-clamp-1 flex w-fit items-center gap-2 text-sm leading-snug font-medium underline-offset-4",
        className,
      )}
      {...props}
    />
  );
}
