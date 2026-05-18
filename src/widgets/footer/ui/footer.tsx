"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import { LanguageSwitcher } from "@features/i18n";
import { ThemeToggle } from "@features/theme";

import { cn } from "@shared/lib";
import { LogoOctalMesh, PlaceholderImg } from "@shared/ui";

import { FooterLink } from "./footer-link";
import { FooterLinkGroup } from "./footer-link-group";

function ProductFallback({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group relative aspect-square overflow-hidden border",
        "rounded-4xl transition-all duration-500",
        className,
      )}
    >
      <PlaceholderImg className="h-full w-full scale-180 transition-all duration-500 ease-out group-hover:scale-210" />
    </div>
  );
}

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      className={cn(
        "sticky bottom-0 left-0 z-0 no-scrollbar w-full bg-foreground/2",
        "flex flex-col",
        "h-dvh overflow-y-auto",
        "transition-[min-height] duration-300 ease-out",
      )}
    >
      <div className="grid flex-1 grid-cols-1 sm:grid-cols-2">
        {/* Left col */}
        <div className="flex flex-col">
          <Link href="/" className="border-b p-8">
            <LogoOctalMesh className="h-auto w-full" />
          </Link>

          <div className="flex flex-1 flex-col p-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-md font-mono tracking-widest uppercase opacity-30">
                {t("products.title")}
              </h2>
              <span className="font-mono text-[10px] uppercase opacity-20">
                {t("products.description")}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProductFallback key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Right col */}
        <div className="flex flex-col max-sm:border-t sm:border-l">
          <div className="flex items-center justify-end gap-4 p-8">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          <div className="grid flex-1 grid-cols-1 gap-8 p-8 xl:grid-cols-2">
            <FooterLinkGroup title={t("nav_group.company")}>
              <FooterLink href="/about" label={t("nav.about")} />
              <FooterLink href="/faq" label={t("nav.faq")} />
              <FooterLink href="/contact" label={t("nav.contact")} />
            </FooterLinkGroup>

            <FooterLinkGroup title={t("nav_group.ecosystem")}>
              <FooterLink
                href="https://links.octalmesh.com"
                label={t("nav.links")}
                external
              />
              <FooterLink
                href="https://design.octalmesh.com"
                label={t("nav.design")}
                external
              />
            </FooterLinkGroup>

            <FooterLinkGroup title={t("nav_group.shop")}>
              <FooterLink href="/logistics" label={t("legal.logistics")} />
              <FooterLink href="/warranty" label={t("legal.warranty")} />
            </FooterLinkGroup>
          </div>

          {/* Marquee */}
          <div className="relative flex gap-3 overflow-hidden border-t py-4 font-brand text-4xl uppercase sm:text-6xl lg:text-8xl">
            <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-3 transition-none duration-[60s]">
              <span>{t("marquee")}</span>
              <span>{t("marquee")}</span>
            </div>
            <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-3 transition-none duration-[60s]">
              <span>{t("marquee")}</span>
              <span>{t("marquee")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={cn(
          "border-t",
          "grid gap-3 p-5 max-lg:grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-4 lg:gap-0",
          "font-mono text-sm text-current/50 lg:text-center",
        )}
      >
        <p>{t("copyright")}</p>
        <Link
          href="/privacy"
          className="transition-colors duration-300 hover:text-current"
        >
          {t("legal.privacy")}
        </Link>
        <Link
          href="/terms"
          className="transition-colors duration-300 hover:text-current"
        >
          {t("legal.terms")}
        </Link>
        <Link
          href="/cookies"
          className="transition-colors duration-300 hover:text-current"
        >
          {t("legal.cookies")}
        </Link>
      </div>
    </footer>
  );
}
