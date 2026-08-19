"use client";

import { JSX, ReactNode } from "react";

import { useTranslations } from "next-intl";

import { Dialog } from "@base-ui/react/dialog";

import { cn } from "@shared/lib";

import { useNavigation } from "../model";

export interface NavOverlayMenuProps {
  children: ReactNode;
  backdrop?: ReactNode;
}

export function NavOverlayMenu({
  children,
  backdrop,
}: NavOverlayMenuProps): JSX.Element {
  const t = useTranslations("common");
  const { isMenuOpen, closeMenu, navBarContainer } = useNavigation();

  return (
    <Dialog.Root
      open={isMenuOpen}
      onOpenChange={(open) => {
        if (!open) closeMenu();
      }}
    >
      <Dialog.Portal container={navBarContainer ?? undefined}>
        <Dialog.Backdrop
          className={cn(
            "fixed inset-0 z-105 bg-black/10 backdrop-blur-md transition-opacity duration-200 ease-in-out max-sm:hidden",
            "[&[data-starting-style],&[data-ending-style]]:opacity-0",
          )}
        >
          {backdrop ?? (
            <div className="flex min-h-dvh w-1/3 items-center justify-center md:px-20 lg:w-1/2 lg:px-50">
              <h1 className="text-center font-brand text-4xl uppercase lg:text-7xl">
                {t("brand")}
              </h1>
            </div>
          )}
        </Dialog.Backdrop>

        <Dialog.Popup
          className={cn(
            "fixed inset-y-0 right-0 z-108 no-scrollbar flex w-full flex-col overflow-y-auto border-l bg-background shadow-2xl",
            "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "[&[data-ending-style],&[data-starting-style]]:translate-x-full",
            "sm:w-2/3 lg:w-1/2",
          )}
        >
          <Dialog.Title className="sr-only">{t("nav.menu")}</Dialog.Title>
          {children}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
