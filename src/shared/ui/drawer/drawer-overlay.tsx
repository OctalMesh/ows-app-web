"use client";

import type { JSX } from "react";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

import { cn } from "@shared/lib";

export type DrawerOverlayProps = DrawerPrimitive.Backdrop.Props;

export function DrawerOverlay({
  className,
  ...props
}: DrawerOverlayProps): JSX.Element {
  return (
    <DrawerPrimitive.Backdrop
      data-slot="drawer-overlay"
      className={cn(
        "fixed inset-0 z-50 min-h-dvh bg-black/30 opacity-[max(var(--drawer-overlay-min-opacity,0),calc(1-var(--drawer-swipe-progress)))] transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] select-none data-ending-style:pointer-events-none data-ending-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-snap-points:[--drawer-overlay-min-opacity:0.5] data-starting-style:opacity-0 data-swiping:duration-0 supports-backdrop-filter:backdrop-blur-sm supports-[-webkit-touch-callout:none]:absolute",
        className,
      )}
      {...props}
    />
  );
}
