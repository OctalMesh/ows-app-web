"use client";

import type { JSX } from "react";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

import { cn } from "@shared/lib/cn";

export type DrawerTitleProps = DrawerPrimitive.Title.Props;

export function DrawerTitle({
  className,
  ...props
}: DrawerTitleProps): JSX.Element {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-base font-medium text-foreground", className)}
      {...props}
    />
  );
}
