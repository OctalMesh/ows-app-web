"use client";

import { createContext, useContext } from "react";

import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

export interface DrawerContextProps {
  hasSnapPoints: boolean;
  modal: DrawerPrimitive.Root.Props["modal"];
  showSwipeHandle: boolean;
  swipeDirection: NonNullable<DrawerPrimitive.Root.Props["swipeDirection"]>;
}

export const DrawerContext = createContext<DrawerContextProps | null>(null);

export function useDrawer(): DrawerContextProps {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error("useDrawer must be used within a Drawer.");
  }

  return context;
}
