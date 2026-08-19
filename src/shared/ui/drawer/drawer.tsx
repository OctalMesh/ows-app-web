"use client";

import type { JSX } from "react";
import { useMemo } from "react";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

import { DrawerContext } from "./use-drawer";

export interface DrawerProps extends DrawerPrimitive.Root.Props {
  showSwipeHandle?: boolean;
}

export function Drawer({
  modal = true,
  showSwipeHandle = false,
  snapPoints,
  swipeDirection = "down",
  ...props
}: DrawerProps): JSX.Element {
  const hasSnapPoints = snapPoints != null && snapPoints.length > 0;
  const contextValue = useMemo(
    () => ({ hasSnapPoints, modal, showSwipeHandle, swipeDirection }),
    [hasSnapPoints, modal, showSwipeHandle, swipeDirection],
  );

  return (
    <DrawerContext.Provider value={contextValue}>
      <DrawerPrimitive.Root
        data-slot="drawer"
        modal={modal}
        snapPoints={snapPoints}
        swipeDirection={swipeDirection}
        {...props}
      />
    </DrawerContext.Provider>
  );
}
