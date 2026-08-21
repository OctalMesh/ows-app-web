"use client";

import { JSX, ReactNode } from "react";

import { NavPrimaryList } from "./nav-primary-list";
import { PrimaryNavHome } from "./primary-nav-home";
import { PrimaryNavTab } from "./primary-nav-tab";

export interface PrimaryNavProps {
  children: ReactNode;
  className?: string;
}

function PrimaryNavRoot({ children, className }: PrimaryNavProps): JSX.Element {
  return <NavPrimaryList className={className}>{children}</NavPrimaryList>;
}

export interface PrimaryNavComponent {
  (props: PrimaryNavProps): JSX.Element;
  Home: typeof PrimaryNavHome;
  Tab: typeof PrimaryNavTab;
}

export const PrimaryNav: PrimaryNavComponent = Object.assign(PrimaryNavRoot, {
  Home: PrimaryNavHome,
  Tab: PrimaryNavTab,
});
