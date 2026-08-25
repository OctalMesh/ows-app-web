"use client";

import type { ComponentProps, JSX } from "react";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";

import { cn } from "@shared/lib/cn";

export type SheetTitleProps = ComponentProps<typeof SheetPrimitive.Title>;

export function SheetTitle({
  className,
  ...props
}: SheetTitleProps): JSX.Element {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-base font-medium text-foreground", className)}
      {...props}
    />
  );
}
