"use client";

import type { JSX } from "react";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

import { cn } from "@shared/lib";

export type DialogTitleProps = DialogPrimitive.Title.Props;

export function DialogTitle({
  className,
  ...props
}: DialogTitleProps): JSX.Element {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-base leading-none font-medium", className)}
      {...props}
    />
  );
}
