"use client";

import type { JSX } from "react";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";

import { cn } from "@shared/lib";

export type SheetDescriptionProps = SheetPrimitive.Description.Props;

export function SheetDescription({
  className,
  ...props
}: SheetDescriptionProps): JSX.Element {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}
