"use client";

import type { JSX } from "react";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";

import { cn } from "@shared/lib";

export type ComboboxLabelProps = ComboboxPrimitive.GroupLabel.Props;

export function ComboboxLabel({
  className,
  ...props
}: ComboboxLabelProps): JSX.Element {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn("px-3 py-2.5 text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}
