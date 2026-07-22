"use client";

import { useEffect, useMemo } from "react";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

import {
  IconChevronRight,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

import { LanguageSwitcher } from "@features/i18n";
import { ThemeToggle } from "@features/theme";

import {
  type NavigationContext,
  PRINT_MENU_LINKS,
  SERVICE_MENU_LINKS,
  SHOP_MENU_LINKS,
} from "@shared/config";
import { useNavigationStore } from "@shared/lib/navigation";

interface MenuOverlayProps {
  context: NavigationContext;
}

export function MenuOverlay({ context }: MenuOverlayProps) {
  const t = useTranslations("common");
  const locale = useLocale();

  const isMenuOpen = useNavigationStore((state) => state.isMenuOpen);
  const closeMenu = useNavigationStore((state) => state.closeMenu);

  const menuLinks = useMemo(() => {
    if (context.isPrint) return PRINT_MENU_LINKS;
    if (context.isService) return SERVICE_MENU_LINKS;
    return SHOP_MENU_LINKS;
  }, [context.isPrint, context.isService]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-105 bg-black/10 backdrop-blur-md max-sm:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          >
            <div className="flex min-h-dvh w-1/3 items-center justify-center md:px-20 lg:w-1/2 lg:px-50">
              <h1 className="text-center font-brand text-4xl uppercase lg:text-7xl">
                {t("brand")}
              </h1>
            </div>
          </motion.div>

          {/* Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-108 flex w-full flex-col overflow-y-auto border-l bg-background shadow-2xl sm:w-2/3 lg:w-1/2"
          >
            <div className="flex flex-col gap-8 max-sm:pb-20 sm:pt-20">
              {/* Links */}
              <div className="flex flex-col gap-2 border-b p-6">
                <p className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  {t("nav.menu")}
                </p>
                {menuLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-3xl border border-transparent px-8 py-4 transition-all duration-300 hover:border-border/60 hover:bg-muted"
                  >
                    <span className="text-3xl font-medium tracking-tight sm:text-4xl">
                      {t(link.label as never)}
                    </span>
                    <IconChevronRight className="size-6 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>

              {/* Setting & profile */}
              <div className="mt-auto flex flex-col gap-3 p-6 pt-8">
                <p className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  {t("nav.links")}
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Link
                    href="/account"
                    onClick={closeMenu}
                    className="flex h-16 items-center justify-start gap-3 rounded-[1.5rem] border border-border/60 px-5 transition-colors hover:bg-muted"
                  >
                    <IconUserCircle className="size-6 text-muted-foreground" />
                    <span className="font-medium">{t("nav.profile")}</span>
                  </Link>

                  <Link
                    href="/settings"
                    onClick={closeMenu}
                    className="flex h-16 items-center justify-start gap-3 rounded-[1.5rem] border border-border/60 px-5 transition-colors hover:bg-muted"
                  >
                    <IconSettings className="size-6 text-muted-foreground" />
                    <span className="font-medium">{t("nav.settings")}</span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex items-center justify-between rounded-[1.5rem] border border-border/60 px-5 py-4">
                    <div>
                      <p className="font-medium">{t("nav.settings")}</p>
                      <p className="text-xs text-muted-foreground">Theme</p>
                    </div>
                    <ThemeToggle />
                  </div>

                  <div className="flex items-center justify-between rounded-[1.5rem] border border-border/60 px-5 py-4">
                    <div>
                      <p className="font-medium">{t("nav.language")}</p>
                      <p className="text-xs text-muted-foreground">
                        {locale.toUpperCase()}
                      </p>
                    </div>
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
