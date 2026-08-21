"use client";

import { useCallback, useEffect, useState } from "react";
import type { JSX, ReactNode } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { useCartStore } from "@entities/cart";

import { usePathname } from "@shared/i18n";
import { createFlagStore, createOverlayStore } from "@shared/lib";

import {
  type NavOverlayKey,
  NavigationContext,
  type NavigationContextValue,
} from "../../model/use-navigation";

export interface NavigationProps {
  children: ReactNode;
}

export function Navigation({ children }: NavigationProps): JSX.Element {
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

  const isAnyOpen = activeOverlay !== null;

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useHotkeys("escape", closeAll, {
    enabled: isAnyOpen,
    enableOnFormTags: true,
  });

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
    isAnyOpen,
    navBarContainer,
    setNavBarContainer,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}
