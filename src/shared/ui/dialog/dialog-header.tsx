"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type DialogHeaderProps = ComponentProps<"div">;

export function DialogHeader({
  className,
  ...props
}: DialogHeaderProps): JSX.Element {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  );
}
