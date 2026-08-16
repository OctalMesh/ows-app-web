"use client";

import { ReactNode } from "react";

import { useLocale, useTranslations } from "next-intl";

import {
  IconCube,
  IconSettings,
  IconShoppingBag,
  IconUserCircle,
} from "@tabler/icons-react";

import {
  MenuButton,
  NavBar,
  NavOverlay,
  Navigation,
  PrimaryNav,
} from "@widgets/navigation";

import { LanguageSwitcher } from "@features/i18n";
import { ThemeToggle } from "@features/theme";

import { useCartStore } from "@entities/cart";

export default function ServiceLayout({ children }: { children: ReactNode }) {
  return (
    <Navigation>
      <NavBar>
        <PrimaryNav>
          <PrimaryNav.Home href="/service" />
          <ConstructorTab />
          <CartTab />
        </PrimaryNav>
        <MenuButton />

        <NavOverlay.Menu>
          <NavOverlay.MenuContent>
            <MenuSection />
            <LinksSection />
          </NavOverlay.MenuContent>
        </NavOverlay.Menu>
      </NavBar>

      <NavOverlay.Panel overlay="constructor">
        <div />
      </NavOverlay.Panel>
      <NavOverlay.Panel overlay="cart">
        <div />
      </NavOverlay.Panel>

      {children}
    </Navigation>
  );
}

function ConstructorTab() {
  const t = useTranslations("common");
  return (
    <PrimaryNav.Tab
      overlay="constructor"
      icon={<IconCube className="size-5" />}
      label={t("nav.constructor")}
    />
  );
}

function CartTab() {
  const t = useTranslations("common");
  const count = useCartStore((s) => s.itemsCount);
  return (
    <PrimaryNav.Tab
      overlay="cart"
      icon={<IconShoppingBag className="size-5" />}
      label={t("nav.cart")}
      count={count}
    />
  );
}

function MenuSection() {
  const t = useTranslations("common");
  return (
    <NavOverlay.MenuSection title={t("nav.menu")}>
      <NavOverlay.MenuLink href="/" label={t("nav.home")} />
      <NavOverlay.MenuLink href="/about" label={t("nav.about")} />
      <NavOverlay.MenuLink href="/contact" label={t("nav.contact")} />
    </NavOverlay.MenuSection>
  );
}

function LinksSection() {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <NavOverlay.MenuSection
      title={t("nav.links")}
      className="mt-auto border-b-0 pt-8"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <NavOverlay.MenuAction
          href="/account"
          icon={<IconUserCircle className="size-6 text-muted-foreground" />}
          label={t("nav.profile")}
        />
        <NavOverlay.MenuAction
          href="/settings"
          icon={<IconSettings className="size-6 text-muted-foreground" />}
          label={t("nav.settings")}
        />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <NavOverlay.MenuControl
          label={t("nav.settings")}
          value="Theme"
          control={<ThemeToggle />}
        />
        <NavOverlay.MenuControl
          label={t("nav.language")}
          value={locale.toUpperCase()}
          control={<LanguageSwitcher />}
        />
      </div>
    </NavOverlay.MenuSection>
  );
}
