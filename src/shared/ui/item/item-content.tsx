"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type ItemContentProps = ComponentProps<"div">;

export function ItemContent({
  className,
  ...props
}: ItemContentProps): JSX.Element {
  return (
    <div
      data-slot="item-content"
      className={cn(
        "flex flex-1 flex-col gap-1 group-data-[size=xs]/item:gap-0.5 [&+[data-slot=item-content]]:flex-none",
        className,
      )}
      {...props}
    />
  );
}
