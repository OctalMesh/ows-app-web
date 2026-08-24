"use client";

import { JSX, ReactNode } from "react";

import { useLocale, useTranslations } from "next-intl";

import {
  IconSearch,
  IconSettings,
  IconShoppingBag,
  IconUserCircle,
} from "@tabler/icons-react";

import { BackButton } from "@widgets/navigation";

import { LanguageSwitcher } from "@features/i18n";
import { ThemeToggle } from "@features/theme";

import { useCartStore } from "@entities/cart";

import { PageStatus, useNavigationHistory } from "../../model";
import { MenuButton } from "../primitives/menu-button";
import { NavBar } from "../primitives/nav-bar";
import { NavOverlay } from "../primitives/nav-overlay";
import { Navigation } from "../primitives/navigation";
import { PrimaryNav } from "../primitives/primary-nav";

export interface DefaultNavigationProps {
  showBackButton?: boolean;
  showPrimaryNav?: boolean;
  children: ReactNode;
}

export function DefaultNavigation({
  showBackButton = false,
  showPrimaryNav = true,
  children,
}: DefaultNavigationProps): JSX.Element {
  const t = useTranslations("common.nav");
  const { pageStatus } = useNavigationHistory();

  const isErrorPage = pageStatus === PageStatus.ERROR;

  return (
    <Navigation>
      <NavBar>
        {(showBackButton || isErrorPage) && <BackButton />}

        {showPrimaryNav && !isErrorPage && (
          <PrimaryNav>
            <PrimaryNav.Home href="/" label={t("home")} />
            <SearchTab />
            <CartTab />
          </PrimaryNav>
        )}

        <MenuButton />

        <NavOverlay.Menu>
          <NavOverlay.MenuContent>
            <MenuSection />
            <LinksSection />
          </NavOverlay.MenuContent>
        </NavOverlay.Menu>
      </NavBar>

      <NavOverlay.Panel overlay="search">
        <div />
      </NavOverlay.Panel>
      <NavOverlay.Panel overlay="cart">
        <div />
      </NavOverlay.Panel>

      {children}
    </Navigation>
  );
}

function SearchTab(): JSX.Element {
  const t = useTranslations("common.nav");
  return (
    <PrimaryNav.Tab
      overlay="search"
      icon={<IconSearch className="size-5" />}
      label={t("search")}
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
      <NavOverlay.MenuLink href="/catalog" label={t("catalog")} />
      <NavOverlay.MenuLink href="/service" label={t("printing")} />
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
