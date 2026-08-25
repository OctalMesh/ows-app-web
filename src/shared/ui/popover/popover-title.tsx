"use client";

import type { JSX } from "react";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

import { cn } from "@shared/lib/cn";

export type PopoverTitleProps = PopoverPrimitive.Title.Props;

export function PopoverTitle({
  className,
  ...props
}: PopoverTitleProps): JSX.Element {
  return (
    <PopoverPrimitive.Title
      data-slot="popover-title"
      className={cn("text-base font-medium", className)}
      {...props}
    />
  );
}
