"use client";

import type { JSX } from "react";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

import { cn } from "@shared/lib";

export type PopoverDescriptionProps = PopoverPrimitive.Description.Props;

export function PopoverDescription({
  className,
  ...props
}: PopoverDescriptionProps): JSX.Element {
  return (
    <PopoverPrimitive.Description
      data-slot="popover-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}
