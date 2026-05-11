"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import { LanguageSwitcher } from "@features/i18n";
import { ThemeToggle } from "@features/theme";

import { cn } from "@shared/lib";
import { LogoOctalMesh } from "@shared/ui/branding";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      className={cn(
        "sticky bottom-0 left-0 z-0 w-full bg-foreground/2",
        "flex flex-col",
        "min-h-dvh transition-[min-height] duration-300 ease-out",
      )}
    >
      <div className="grid flex-1 grid-cols-1 sm:grid-cols-2">
        <div className="p-8">
          <LogoOctalMesh className="h-auto w-full" />
        </div>
        <div className="flex flex-col p-8 max-sm:border-t sm:border-l">
          <div className="flex flex-row items-center justify-end gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-t",
          "grid gap-3 p-5 max-lg:grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-5 lg:gap-0",
          "font-mono text-sm text-current/50 lg:text-center",
        )}
      >
        <p>{t("copyright")}</p>
        <Link href="/about">{t("about")}</Link>
        <Link href="/privacy">{t("privacy")}</Link>
        <Link href="/terms">{t("terms")}</Link>
        <Link href="/contact">{t("contact")}</Link>
      </div>
    </footer>
  );
}
