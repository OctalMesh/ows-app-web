"use client";

import { ReactNode } from "react";

import { useTranslations } from "next-intl";

import {
  BackButton,
  MenuButton,
  NavBar,
  NavOverlay,
  Navigation,
} from "@features/navigation";

interface Props {
  children: ReactNode;
}

export default function ContentLayout({ children }: Props) {
  const t = useTranslations("common");

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
          </NavOverlay.MenuContent>
        </NavOverlay.Menu>
      </NavBar>

      {children}
    </Navigation>
  );
}
