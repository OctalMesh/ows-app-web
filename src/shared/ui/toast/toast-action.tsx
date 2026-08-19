"use client";

import { JSX } from "react";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";

import { cn } from "@shared/lib";
import { Button } from "@shared/ui/button";

export type ToastActionProps = ToastPrimitive.Action.Props;

export function ToastAction({
  className,
  render = <Button variant="outline" size="sm" />,
  ...props
}: ToastActionProps): JSX.Element {
  return (
    <ToastPrimitive.Action
      data-slot="toast-action"
      render={render}
      className={cn("shrink-0", className)}
      {...props}
    />
  );
}
