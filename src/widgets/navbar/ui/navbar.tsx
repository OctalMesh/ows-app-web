"use client";

import { useEffect } from "react";

import {
  BackButton,
  MenuButton,
  PrimaryBar,
  getNavigationContext,
  isPrimaryNavigationVisible,
  useNavigationStore,
} from "@features/navigation";

import { usePathname } from "@shared/i18n";
import { cn } from "@shared/lib";

import { CartOverlay } from "./cart-overlay";
import { MenuOverlay } from "./menu-overlay";
import { SearchOverlay } from "./search-overlay";

export function Navbar() {
  const pathname = usePathname();
  const context = getNavigationContext(pathname);

  const isSearchOpen = useNavigationStore((state) => state.isSearchOpen);
  const isCartOpen = useNavigationStore((state) => state.isCartOpen);
  const closeAll = useNavigationStore((state) => state.closeAll);

  useEffect(() => {
    closeAll();
  }, [closeAll, pathname]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeAll();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeAll]);

  const showPrimaryBar = isPrimaryNavigationVisible(pathname);
  const showBackButton = context.isService;

  const activePrimaryItem: "home" | "search" | "cart" | null = isSearchOpen
    ? "search"
    : isCartOpen
      ? "cart"
      : pathname === "/"
        ? "home"
        : null;

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 z-100 transition-all duration-500 max-sm:bottom-0",
          "sm:top-0 sm:right-0 sm:left-auto sm:w-full sm:max-w-100 sm:p-4",
          "lg:max-w-120",
        )}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-auto flex w-full flex-row justify-between gap-3 px-3 py-3 sm:justify-end sm:gap-4">
          {showPrimaryBar ? (
            <PrimaryBar context={context} activeItem={activePrimaryItem} />
          ) : null}
          {showBackButton ? <BackButton /> : null}
          <MenuButton />
        </div>

        <MenuOverlay context={context} />
      </nav>

      <SearchOverlay />
      <CartOverlay />
    </>
  );
}
