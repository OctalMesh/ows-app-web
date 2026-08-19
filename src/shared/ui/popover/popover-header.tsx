"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type PopoverHeaderProps = ComponentProps<"div">;

export function PopoverHeader({
  className,
  ...props
}: PopoverHeaderProps): JSX.Element {
  return (
    <div
      data-slot="popover-header"
      className={cn("flex flex-col gap-1 text-sm", className)}
      {...props}
    />
  );
}
