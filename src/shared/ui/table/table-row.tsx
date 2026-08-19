"use client";

import { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type TableRowProps = ComponentProps<"tr">;

export function TableRow({ className, ...props }: TableRowProps): JSX.Element {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className,
      )}
      {...props}
    />
  );
}
