"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type SheetFooterProps = ComponentProps<"div">;

export function SheetFooter({
  className,
  ...props
}: SheetFooterProps): JSX.Element {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-6", className)}
      {...props}
    />
  );
}
