"use client";

import { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type TableFooterProps = ComponentProps<"tfoot">;

export function TableFooter({
  className,
  ...props
}: TableFooterProps): JSX.Element {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}
