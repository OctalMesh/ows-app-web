"use client";

import type { ReactNode } from "react";

import { NavOverlayMenu } from "./nav-overlay-menu";
import { NavOverlayMenuAction } from "./nav-overlay-menu-action";
import { NavOverlayMenuContent } from "./nav-overlay-menu-content";
import { NavOverlayMenuControl } from "./nav-overlay-menu-control";
import { NavOverlayMenuLink } from "./nav-overlay-menu-link";
import { NavOverlayMenuSection } from "./nav-overlay-menu-section";
import { NavOverlayPanel } from "./nav-overlay-panel";

function NavOverlayRoot({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export const NavOverlay = Object.assign(NavOverlayRoot, {
  Panel: NavOverlayPanel,
  Menu: NavOverlayMenu,
  MenuContent: NavOverlayMenuContent,
  MenuSection: NavOverlayMenuSection,
  MenuLink: NavOverlayMenuLink,
  MenuAction: NavOverlayMenuAction,
  MenuControl: NavOverlayMenuControl,
});
