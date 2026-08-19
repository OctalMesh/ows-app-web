"use client";

import type { JSX } from "react";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

export type DrawerCloseProps = DrawerPrimitive.Close.Props;

export function DrawerClose({ ...props }: DrawerCloseProps): JSX.Element {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}
