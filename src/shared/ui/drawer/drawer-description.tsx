"use client";

import type { JSX } from "react";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

import { cn } from "@shared/lib/cn";

export type DrawerDescriptionProps = DrawerPrimitive.Description.Props;

export function DrawerDescription({
  className,
  ...props
}: DrawerDescriptionProps): JSX.Element {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-sm text-balance text-muted-foreground", className)}
      {...props}
    />
  );
}
