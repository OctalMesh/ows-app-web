"use client";

import type { JSX } from "react";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";

import { cn } from "@shared/lib/cn";

export type SheetOverlayProps = SheetPrimitive.Backdrop.Props;

export function SheetOverlay({
  className,
  ...props
}: SheetOverlayProps): JSX.Element {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/30 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}
