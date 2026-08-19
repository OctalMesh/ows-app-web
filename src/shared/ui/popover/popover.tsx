"use client";

import type { JSX } from "react";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

export type PopoverProps = PopoverPrimitive.Root.Props;

export function Popover({ ...props }: PopoverProps): JSX.Element {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}
