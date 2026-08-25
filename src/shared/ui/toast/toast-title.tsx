"use client";

import { JSX } from "react";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";

import { cn } from "@shared/lib/cn";

export type ToastTitleProps = ToastPrimitive.Title.Props;

export function ToastTitle({
  className,
  ...props
}: ToastTitleProps): JSX.Element {
  return (
    <ToastPrimitive.Title
      data-slot="toast-title"
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  );
}
