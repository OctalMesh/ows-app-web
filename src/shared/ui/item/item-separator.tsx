"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";
import { Separator } from "@shared/ui";

export type ItemSeparatorProps = ComponentProps<typeof Separator>;

export function ItemSeparator({
  className,
  ...props
}: ItemSeparatorProps): JSX.Element {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("my-2", className)}
      {...props}
    />
  );
}
