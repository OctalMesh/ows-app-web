"use client";

import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { useCartStore } from "@entities/cart";

import { usePathname } from "@shared/i18n";

import { createFlagStore } from "./create-flag-store";
import { createOverlayStore } from "./create-overlay-store";

export type NavOverlayKey = string;

interface NavigationContextValue {
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

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function Navigation({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const [useMenuStore] = useState(() => createFlagStore());
  const [useOverlayStore] = useState(() => createOverlayStore<NavOverlayKey>());

  const isMenuOpen = useMenuStore((s) => s.isOpen);
  const openMenu = useMenuStore((s) => s.open);
  const closeMenu = useMenuStore((s) => s.close);
  const toggleMenu = useMenuStore((s) => s.toggle);

  const activeOverlay = useOverlayStore((s) => s.active);
  const openOverlay = useOverlayStore((s) => s.open);
  const closeOverlay = useOverlayStore((s) => s.close);
  const toggleOverlay = useOverlayStore((s) => s.toggle);
  const closeAllOverlays = useOverlayStore((s) => s.closeAll);

  const cartItemsCount = useCartStore((s) => s.itemsCount);

  const [navBarContainer, setNavBarContainer] = useState<HTMLDivElement | null>(
    null,
  );

  const closeAll = useCallback(() => {
    closeMenu();
    closeAllOverlays();
  }, [closeMenu, closeAllOverlays]);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeAll();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeAll]);

  const value: NavigationContextValue = {
    pathname,
    isMenuOpen,
    activeOverlay,
    cartItemsCount,
    openMenu,
    closeMenu,
    toggleMenu,
    openOverlay,
    closeOverlay,
    toggleOverlay,
    closeAll,
    isAnyOpen: activeOverlay !== null,
    navBarContainer,
    setNavBarContainer,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("Navigation.* components must be used within <Navigation>");
  }

  return context;
}
