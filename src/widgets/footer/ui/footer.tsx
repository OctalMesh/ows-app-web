"use client";

import type { ComponentProps, JSX } from "react";
import { useLayoutEffect, useRef, useState } from "react";

import { useTranslations } from "next-intl";
import Link from "next/link";

import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "@shared/lib";
import { LogoOctalMesh, PlaceholderImg } from "@shared/ui";

import { FooterLink } from "./footer-link";
import { FooterLinkGroup } from "./footer-link-group";

const FALLBACK_ITEMS_COUNT = 6;

interface ProductFallbackProps {
  className?: string;
}

function ProductFallback({ className }: ProductFallbackProps): JSX.Element {
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

export type FooterProps = ComponentProps<"footer">;

export function Footer({ className, ...props }: FooterProps): JSX.Element {
  const t = useTranslations("footer");
  const footerRef = useRef<HTMLElement>(null);
  const [fitsViewport, setFitsViewport] = useState(false);

  useLayoutEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return;
    }

    let frame = 0;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];

      if (!entry) {
        return;
      }

      const footerHeight =
        entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setFitsViewport(footerHeight <= window.innerHeight);
      });
    });

    resizeObserver.observe(footer);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <footer
      ref={footerRef}
      className={cn(
        className,
        "relative left-0 z-0 w-full bg-background",
        "[contain:layout_paint]",
        fitsViewport && "overflow-hidden",
      )}
      {...props}
    >
      <motion.div
        style={fitsViewport ? { y } : undefined}
        className={cn(
          "flex w-full flex-col bg-foreground/2",
          "min-h-dvh transition-[min-height] duration-300 ease-out",
        )}
      >
        <div className="grid flex-1 grid-cols-1 sm:grid-cols-2">
          {/* Left col */}
          <div className="flex flex-col">
            <Link
              aria-label={t("nav_group.company")}
              href="/"
              className="border-b p-8"
            >
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
                {Array.from({ length: FALLBACK_ITEMS_COUNT }).map(
                  (_, index) => (
                    <ProductFallback key={index} />
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Right col */}
          <div className="flex flex-col max-sm:border-t sm:border-l">
            <div className="grid flex-1 grid-cols-1 gap-8 p-8 sm:pt-30 xl:grid-cols-2">
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
      </motion.div>
    </footer>
  );
}
