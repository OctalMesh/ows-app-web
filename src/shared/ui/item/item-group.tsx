"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type ItemGroupProps = ComponentProps<"div">;

export function ItemGroup({
  className,
  ...props
}: ItemGroupProps): JSX.Element {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn(
        "group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2",
        className,
      )}
      {...props}
    />
  );
}
