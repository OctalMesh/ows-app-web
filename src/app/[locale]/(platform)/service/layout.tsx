"use client";

import { JSX } from "react";

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

type ServiceLayoutProps = LayoutProps<"/[locale]/service">;

export default function ServiceLayout({
  children,
}: ServiceLayoutProps): JSX.Element {
  const t = useTranslations("common.nav");

  return (
    <Navigation>
      <NavBar>
        <PrimaryNav>
          <PrimaryNav.Home href="/service" label={t("printing")} />
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

function ConstructorTab(): JSX.Element {
  const t = useTranslations("common.nav");
  return (
    <PrimaryNav.Tab
      overlay="constructor"
      icon={<IconCube className="size-5" />}
      label={t("constructor")}
    />
  );
}

function CartTab(): JSX.Element {
  const t = useTranslations("common.nav");
  const count = useCartStore((s) => s.itemsCount);
  return (
    <PrimaryNav.Tab
      overlay="cart"
      icon={<IconShoppingBag className="size-5" />}
      label={t("cart")}
      count={count}
    />
  );
}

function MenuSection(): JSX.Element {
  const t = useTranslations("common.nav");
  return (
    <NavOverlay.MenuSection title={t("menu")}>
      <NavOverlay.MenuLink href="/" label={t("home")} />
      <NavOverlay.MenuLink href="/about" label={t("about")} />
      <NavOverlay.MenuLink href="/contact" label={t("contact")} />
    </NavOverlay.MenuSection>
  );
}

function LinksSection(): JSX.Element {
  const t = useTranslations("common.nav");
  const locale = useLocale();

  return (
    <NavOverlay.MenuSection
      title={t("links")}
      className="mt-auto border-b-0 pt-8"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <NavOverlay.MenuAction
          href="/account"
          icon={<IconUserCircle className="size-6 text-muted-foreground" />}
          label={t("profile")}
        />
        <NavOverlay.MenuAction
          href="/settings"
          icon={<IconSettings className="size-6 text-muted-foreground" />}
          label={t("settings")}
        />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <NavOverlay.MenuControl
          label={t("settings")}
          value="Theme"
          control={<ThemeToggle />}
        />
        <NavOverlay.MenuControl
          label={t("language")}
          value={locale.toUpperCase()}
          control={<LanguageSwitcher />}
        />
      </div>
    </NavOverlay.MenuSection>
  );
}
