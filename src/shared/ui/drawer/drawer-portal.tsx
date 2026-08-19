"use client";

import type { JSX } from "react";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

export type DrawerPortalProps = DrawerPrimitive.Portal.Props;

export function DrawerPortal({ ...props }: DrawerPortalProps): JSX.Element {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}
