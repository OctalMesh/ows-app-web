"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type ItemActionsProps = ComponentProps<"div">;

export function ItemActions({
  className,
  ...props
}: ItemActionsProps): JSX.Element {
  return (
    <div
      data-slot="item-actions"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}
