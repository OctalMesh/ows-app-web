"use client";

import { JSX } from "react";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";

import { cn } from "@shared/lib/cn";

export type ToastViewportProps = ToastPrimitive.Viewport.Props;

export function ToastViewport({
  className,
  ...props
}: ToastViewportProps): JSX.Element {
  return (
    <ToastPrimitive.Viewport
      data-slot="toast-viewport"
      className={cn(
        "pointer-events-none fixed inset-x-4 bottom-4 z-50 mx-auto w-auto max-w-sm outline-none sm:right-4 sm:left-auto sm:mx-0 sm:w-full",
        className,
      )}
      {...props}
    />
  );
}
