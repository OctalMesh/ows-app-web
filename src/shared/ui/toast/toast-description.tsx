"use client";

import { JSX } from "react";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";

import { cn } from "@shared/lib";

export type ToastDescriptionProps = ToastPrimitive.Description.Props;

export function ToastDescription({
  className,
  ...props
}: ToastDescriptionProps): JSX.Element {
  return (
    <ToastPrimitive.Description
      data-slot="toast-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}
