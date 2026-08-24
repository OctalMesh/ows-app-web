"use client";

import { JSX } from "react";

import { IconSmartHome } from "@tabler/icons-react";

import { useNavigation } from "../../model";
import { NavPrimaryItem } from "./nav-primary-item";

export interface PrimaryNavHomeProps {
  href: string;
  label: string;
}

export function PrimaryNavHome({
  href,
  label,
}: PrimaryNavHomeProps): JSX.Element {
  const { pathname, isAnyOpen, closeAll } = useNavigation();

  const active = !isAnyOpen && pathname === href;

  return (
    <NavPrimaryItem
      href={isAnyOpen ? undefined : href}
      onClick={isAnyOpen ? closeAll : undefined}
      active={active}
      ariaLabel={label}
      icon={<IconSmartHome className="size-5" />}
      label={label}
    />
  );
}
