"use client";

import type { JSX } from "react";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";

import { cn } from "@shared/lib";

export type ComboboxSeparatorProps = ComboboxPrimitive.Separator.Props;

export function ComboboxSeparator({
  className,
  ...props
}: ComboboxSeparatorProps): JSX.Element {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("-mx-1.5 my-1.5 h-px bg-border", className)}
      {...props}
    />
  );
}
