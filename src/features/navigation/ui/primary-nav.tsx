"use client";

import type { ReactNode } from "react";

import { NavPrimaryList } from "./nav-primary-list";
import { PrimaryNavHome } from "./primary-nav-home";
import { PrimaryNavTab } from "./primary-nav-tab";

interface PrimaryNavProps {
  children: ReactNode;
  className?: string;
}

function PrimaryNavRoot({ children, className }: PrimaryNavProps) {
  return <NavPrimaryList className={className}>{children}</NavPrimaryList>;
}

export const PrimaryNav = Object.assign(PrimaryNavRoot, {
  Home: PrimaryNavHome,
  Tab: PrimaryNavTab,
});
