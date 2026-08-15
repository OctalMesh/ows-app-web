"use client";

import { useTranslations } from "next-intl";

import { IconMenu, IconX } from "@tabler/icons-react";

import { useNavigation } from "../model";
import { NavToggleIconButton } from "./nav-toggle-icon-button";

export function MenuButton() {
  const t = useTranslations("common");
  const { isMenuOpen, toggleMenu } = useNavigation();

  return (
    <NavToggleIconButton
      isActive={isMenuOpen}
      onToggle={toggleMenu}
      ariaLabel={t("nav.menu")}
      activeIcon={<IconX className="size-5" />}
      inactiveIcon={<IconMenu className="size-5" />}
    />
  );
}
