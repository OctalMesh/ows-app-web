"use client";

import { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type TableHeadProps = ComponentProps<"th">;

export function TableHead({
  className,
  ...props
}: TableHeadProps): JSX.Element {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-12 px-3 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  );
}
