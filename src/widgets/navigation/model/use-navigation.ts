"use client";

import { createContext, useContext } from "react";

export type NavOverlayKey = string;

export interface NavigationContextValue {
  pathname: string;
  isMenuOpen: boolean;
  activeOverlay: NavOverlayKey | null;
  cartItemsCount: number;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  openOverlay: (key: NavOverlayKey) => void;
  closeOverlay: (key: NavOverlayKey) => void;
  toggleOverlay: (key: NavOverlayKey) => void;
  closeAll: () => void;
  isAnyOpen: boolean;
  navBarContainer: HTMLDivElement | null;
  setNavBarContainer: (node: HTMLDivElement | null) => void;
}

export const NavigationContext = createContext<NavigationContextValue | null>(
  null,
);

export function useNavigation(): NavigationContextValue {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("Navigation.* components must be used within <Navigation>");
  }

  return context;
}
