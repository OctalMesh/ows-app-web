"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type ItemFooterProps = ComponentProps<"div">;

export function ItemFooter({
  className,
  ...props
}: ItemFooterProps): JSX.Element {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className,
      )}
      {...props}
    />
  );
}
