"use client";

import type { JSX } from "react";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { IconX } from "@tabler/icons-react";

import { cn } from "@shared/lib";
import { InputGroupButton } from "@shared/ui/input";

export type ComboboxClearProps = ComboboxPrimitive.Clear.Props;

export function ComboboxClear({
  className,
  ...props
}: ComboboxClearProps): JSX.Element {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      render={<InputGroupButton variant="ghost" size="icon-xs" />}
      className={cn(className)}
      {...props}
    >
      <IconX className="pointer-events-none" />
    </ComboboxPrimitive.Clear>
  );
}
