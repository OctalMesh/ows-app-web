"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type ItemHeaderProps = ComponentProps<"div">;

export function ItemHeader({
  className,
  ...props
}: ItemHeaderProps): JSX.Element {
  return (
    <div
      data-slot="item-header"
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className,
      )}
      {...props}
    />
  );
}
