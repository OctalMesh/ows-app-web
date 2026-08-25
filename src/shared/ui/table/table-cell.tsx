"use client";

import { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type TableCellProps = ComponentProps<"td">;

export function TableCell({
  className,
  ...props
}: TableCellProps): JSX.Element {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-3 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  );
}
