"use client";

import type { JSX } from "react";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";

export type SheetTriggerProps = SheetPrimitive.Trigger.Props;

export function SheetTrigger({ ...props }: SheetTriggerProps): JSX.Element {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}
