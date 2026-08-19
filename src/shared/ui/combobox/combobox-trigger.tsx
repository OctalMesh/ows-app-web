"use client";

import type { JSX } from "react";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { IconChevronDown } from "@tabler/icons-react";

import { cn } from "@shared/lib";

export type ComboboxTriggerProps = ComboboxPrimitive.Trigger.Props;

export function ComboboxTrigger({
  className,
  children,
  ...props
}: ComboboxTriggerProps): JSX.Element {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn("[&_svg:not([class*='size-'])]:size-4", className)}
      {...props}
    >
      {children}
      <IconChevronDown className="pointer-events-none size-4 text-muted-foreground" />
    </ComboboxPrimitive.Trigger>
  );
}
