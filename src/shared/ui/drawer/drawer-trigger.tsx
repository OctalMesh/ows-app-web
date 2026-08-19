"use client";

import type { JSX } from "react";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

export type DrawerTriggerProps = DrawerPrimitive.Trigger.Props;

export function DrawerTrigger({ ...props }: DrawerTriggerProps): JSX.Element {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}
