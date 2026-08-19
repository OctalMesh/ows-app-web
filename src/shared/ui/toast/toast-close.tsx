"use client";

import { JSX } from "react";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";
import { IconX } from "@tabler/icons-react";

import { cn } from "@shared/lib";
import { Button } from "@shared/ui/button";

export type ToastCloseProps = ToastPrimitive.Close.Props;

export function ToastClose({
  className,
  children,
  render = <Button variant="ghost" size="icon-sm" />,
  ...props
}: ToastCloseProps): JSX.Element {
  return (
    <ToastPrimitive.Close
      data-slot="toast-close"
      aria-label="Close toast"
      render={render}
      className={cn(
        "relative shrink-0 text-muted-foreground after:absolute after:-inset-2 after:content-[''] hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children ?? <IconX aria-hidden="true" />}
    </ToastPrimitive.Close>
  );
}
