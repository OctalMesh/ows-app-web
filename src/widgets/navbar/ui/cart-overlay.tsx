"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import {
  IconArrowRight,
  IconFileUpload,
  IconShoppingBag,
} from "@tabler/icons-react";

import {
  DesktopOverlayShell,
  OverlayCard,
  useNavigationStore,
} from "@features/navigation";

import { cn } from "@shared/lib";
import { buttonVariants } from "@shared/ui";

export function CartOverlay() {
  const t = useTranslations("common");

  const isCartOpen = useNavigationStore((state) => state.isCartOpen);
  const cartItemsCount = useNavigationStore((state) => state.cartItemsCount);
  const closeCart = useNavigationStore((state) => state.closeCart);

  return (
    <DesktopOverlayShell open={isCartOpen} onClose={closeCart}>
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <OverlayCard title={t("nav.cart")}>
          <div className="flex items-center gap-4 rounded-[1.5rem] border border-border/60 p-4">
            <div className="flex size-14 items-center justify-center rounded-[1.5rem] bg-foreground text-background">
              <IconShoppingBag className="size-6" />
            </div>
            <div>
              <p className="text-sm tracking-[0.28em] text-muted-foreground uppercase">
                {t("nav.cart")}
              </p>
              <p className="text-2xl font-semibold">{cartItemsCount} items</p>
            </div>
          </div>

          <div className="mt-4 grid gap-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-[1.35rem] border border-border/60 px-4 py-3"
              >
                <div>
                  <p className="font-medium">Sample item {item}</p>
                  <p className="text-sm text-muted-foreground">Quantity 1</p>
                </div>
                <span className="text-sm font-semibold">{item * 1290} UAH</span>
              </div>
            ))}
          </div>
        </OverlayCard>

        <OverlayCard title={t("nav.actions")}>
          <div className="grid gap-3">
            <Link
              href="/checkout"
              onClick={closeCart}
              className={navLinkClass(
                "default",
                "h-12 justify-start gap-2 rounded-[1.35rem]",
              )}
            >
              <IconFileUpload className="size-4" />
              <span>{t("nav.constructor")}</span>
            </Link>

            <Link
              href="/catalog"
              onClick={closeCart}
              className={navLinkClass(
                "outline",
                "h-12 justify-start gap-2 rounded-[1.35rem]",
              )}
            >
              <IconArrowRight className="size-4" />
              <span>{t("nav.catalog")}</span>
            </Link>
          </div>
        </OverlayCard>
      </div>
    </DesktopOverlayShell>
  );
}

function navLinkClass(variant: "default" | "outline", className?: string) {
  return cn(buttonVariants({ variant, size: "lg" }), className);
}
