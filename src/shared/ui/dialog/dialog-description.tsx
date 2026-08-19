"use client";

import type { JSX } from "react";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

import { cn } from "@shared/lib";

export type DialogDescriptionProps = DialogPrimitive.Description.Props;

export function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps): JSX.Element {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}
