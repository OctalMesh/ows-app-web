"use client";

import type { JSX } from "react";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";

import { cn } from "@shared/lib/cn";

export type ComboboxGroupProps = ComboboxPrimitive.Group.Props;

export function ComboboxGroup({
  className,
  ...props
}: ComboboxGroupProps): JSX.Element {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn(className)}
      {...props}
    />
  );
}
