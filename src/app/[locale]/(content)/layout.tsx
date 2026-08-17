"use client";

import { ReactNode } from "react";

import { useLocale, useTranslations } from "next-intl";

import { IconSettings, IconUserCircle } from "@tabler/icons-react";

import {
  BackButton,
  MenuButton,
  NavBar,
  NavOverlay,
  Navigation,
} from "@widgets/navigation";

import { LanguageSwitcher } from "@features/i18n";
import { ThemeToggle } from "@features/theme";

interface Props {
  children: ReactNode;
}

export default function ContentLayout({ children }: Props) {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <Navigation>
      <NavBar>
        <BackButton />
        <MenuButton />

        <NavOverlay.Menu>
          <NavOverlay.MenuContent>
            <NavOverlay.MenuSection title={t("nav.menu")}>
              <NavOverlay.MenuLink href="/catalog" label={t("nav.catalog")} />
              <NavOverlay.MenuLink href="/service" label={t("nav.printing")} />
              <NavOverlay.MenuLink href="/about" label={t("nav.about")} />
              <NavOverlay.MenuLink href="/contact" label={t("nav.contact")} />
            </NavOverlay.MenuSection>
            <NavOverlay.MenuSection
              title={t("nav.links")}
              className="mt-auto border-b-0 pt-8"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <NavOverlay.MenuAction
                  href="/account"
                  icon={
                    <IconUserCircle className="size-6 text-muted-foreground" />
                  }
                  label={t("nav.profile")}
                />
                <NavOverlay.MenuAction
                  href="/settings"
                  icon={
                    <IconSettings className="size-6 text-muted-foreground" />
                  }
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
          </NavOverlay.MenuContent>
        </NavOverlay.Menu>
      </NavBar>

      {children}
    </Navigation>
  );
}
