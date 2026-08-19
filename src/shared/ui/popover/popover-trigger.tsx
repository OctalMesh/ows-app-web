"use client";

import type { JSX } from "react";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

export type PopoverTriggerProps = PopoverPrimitive.Trigger.Props;

export function PopoverTrigger({ ...props }: PopoverTriggerProps): JSX.Element {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}
