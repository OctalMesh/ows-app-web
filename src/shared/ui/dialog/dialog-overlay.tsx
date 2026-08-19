"use client";

import type { JSX } from "react";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

import { cn } from "@shared/lib";

export type DialogOverlayProps = DialogPrimitive.Backdrop.Props;

export function DialogOverlay({
  className,
  ...props
}: DialogOverlayProps): JSX.Element {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 isolate z-50 bg-black/30 duration-100 supports-backdrop-filter:backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className,
      )}
      {...props}
    />
  );
}
