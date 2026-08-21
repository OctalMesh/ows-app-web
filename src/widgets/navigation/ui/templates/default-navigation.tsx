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
  const { pageStatus } = useNavigationHistory();

  const isErrorPage = pageStatus === PageStatus.ERROR;

  return (
    <Navigation>
      <NavBar>
        {(showBackButton || isErrorPage) && <BackButton />}

        {showPrimaryNav && !isErrorPage && (
          <PrimaryNav>
            <PrimaryNav.Home href="/" />
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

function SearchTab() {
  const t = useTranslations("common");
  return (
    <PrimaryNav.Tab
      overlay="search"
      icon={<IconSearch className="size-5" />}
      label={t("nav.search")}
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
      <NavOverlay.MenuLink href="/catalog" label={t("nav.catalog")} />
      <NavOverlay.MenuLink href="/service" label={t("nav.printing")} />
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
