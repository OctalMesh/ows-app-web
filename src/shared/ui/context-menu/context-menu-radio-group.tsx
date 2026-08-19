"use client";

import type { JSX } from "react";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

export type ContextMenuRadioGroupProps = ContextMenuPrimitive.RadioGroup.Props;

export function ContextMenuRadioGroup({
  ...props
}: ContextMenuRadioGroupProps): JSX.Element {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
}
