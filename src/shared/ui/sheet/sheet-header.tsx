"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type SheetHeaderProps = ComponentProps<"div">;

export function SheetHeader({
  className,
  ...props
}: SheetHeaderProps): JSX.Element {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-6", className)}
      {...props}
    />
  );
}
