"use client";

import { JSX } from "react";

import { useTranslations } from "next-intl";

import { IconSmartHome } from "@tabler/icons-react";

import { useNavigation } from "../model";
import { NavPrimaryItem } from "./nav-primary-item";

export interface PrimaryNavHomeProps {
  href: string;
}

export function PrimaryNavHome({ href }: PrimaryNavHomeProps): JSX.Element {
  const t = useTranslations("common");
  const { pathname, isAnyOpen, closeAll } = useNavigation();

  const active = !isAnyOpen && pathname === href;

  return (
    <NavPrimaryItem
      href={isAnyOpen ? undefined : href}
      onClick={isAnyOpen ? closeAll : undefined}
      active={active}
      ariaLabel={t("nav.home")}
      icon={<IconSmartHome className="size-5" />}
      label={t("nav.home")}
    />
  );
}
