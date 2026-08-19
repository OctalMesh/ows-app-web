"use client";

import type { JSX } from "react";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";

import { cn } from "@shared/lib";

export type ToastContentProps = ToastPrimitive.Content.Props;

export function ToastContent({
  className,
  ...props
}: ToastContentProps): JSX.Element {
  return (
    <ToastPrimitive.Content
      data-slot="toast-content"
      className={cn(
        "flex h-full items-center gap-3 overflow-hidden p-4 transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-behind:opacity-0 data-expanded:opacity-100",
        className,
      )}
      {...props}
    />
  );
}
