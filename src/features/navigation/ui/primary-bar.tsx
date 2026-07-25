"use client";

import { useTranslations } from "next-intl";

import {
  IconCube,
  IconSearch,
  IconShoppingBag,
  IconSmartHome,
} from "@tabler/icons-react";

import { cn } from "@shared/lib";

import type { NavigationContext } from "../config";
import { useNavigationStore } from "../model";
import { PrimaryBarItem } from "./primary-bar-item";

interface PrimaryBarProps {
  context: NavigationContext;
  activeItem: "home" | "search" | "cart" | null;
}

export function PrimaryBar({ context, activeItem }: PrimaryBarProps) {
  const t = useTranslations("common");

  const isMenuOpen = useNavigationStore((state) => state.isMenuOpen);
  const isSearchOpen = useNavigationStore((state) => state.isSearchOpen);
  const isCartOpen = useNavigationStore((state) => state.isCartOpen);
  const cartItemsCount = useNavigationStore((state) => state.cartItemsCount);
  const openSearch = useNavigationStore((state) => state.openSearch);
  const openCart = useNavigationStore((state) => state.openCart);
  const closeAll = useNavigationStore((state) => state.closeAll);

  const isAnyOverlayOpen = isSearchOpen || isCartOpen || isMenuOpen;

  return (
    <div className="z-101 flex flex-1 items-stretch gap-1 rounded-full border border-border/70 p-1 backdrop-blur-xl">
      <PrimaryBarItem
        href={isAnyOverlayOpen ? undefined : "/"}
        onClick={isAnyOverlayOpen ? closeAll : undefined}
        active={activeItem === "home"}
        ariaLabel={t("nav.home")}
        icon={<IconSmartHome className="size-5" />}
        label={t("nav.home")}
      />

      <PrimaryBarItem
        active={activeItem === "search"}
        onClick={openSearch}
        ariaLabel={context.isPrint ? t("nav.constructor") : t("nav.search")}
        icon={
          context.isPrint ? (
            <IconCube className="size-5" />
          ) : (
            <IconSearch className="size-5" />
          )
        }
        label={context.isPrint ? t("nav.constructor") : t("nav.search")}
      />

      <PrimaryBarItem
        active={activeItem === "cart"}
        onClick={openCart}
        ariaLabel={t("nav.cart")}
        icon={
          <span className="relative inline-flex">
            <IconShoppingBag className="size-5" />
            {cartItemsCount > 0 ? (
              <span
                className={cn(
                  "absolute -top-2 -right-2 inline-flex min-w-4 items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
                  activeItem === "cart"
                    ? "bg-background text-foreground"
                    : "bg-foreground text-background",
                )}
              >
                {cartItemsCount > 99 ? "99+" : cartItemsCount}
              </span>
            ) : null}
          </span>
        }
        label={t("nav.cart")}
      />
    </div>
  );
}
