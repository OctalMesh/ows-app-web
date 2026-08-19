"use client";

import type { JSX, ReactNode } from "react";

import { NavOverlayMenu } from "./nav-overlay-menu";
import { NavOverlayMenuAction } from "./nav-overlay-menu-action";
import { NavOverlayMenuContent } from "./nav-overlay-menu-content";
import { NavOverlayMenuControl } from "./nav-overlay-menu-control";
import { NavOverlayMenuLink } from "./nav-overlay-menu-link";
import { NavOverlayMenuSection } from "./nav-overlay-menu-section";
import { NavOverlayPanel } from "./nav-overlay-panel";

export interface NavOverlayProps {
  children: ReactNode;
}

function NavOverlayRoot({ children }: NavOverlayProps): JSX.Element {
  return <>{children}</>;
}

export type NavOverlayKey = string;

export interface NavOverlayComponent {
  (props: NavOverlayProps): JSX.Element;
  Panel: typeof NavOverlayPanel;
  Menu: typeof NavOverlayMenu;
  MenuContent: typeof NavOverlayMenuContent;
  MenuSection: typeof NavOverlayMenuSection;
  MenuLink: typeof NavOverlayMenuLink;
  MenuAction: typeof NavOverlayMenuAction;
  MenuControl: typeof NavOverlayMenuControl;
}

export const NavOverlay: NavOverlayComponent = Object.assign(NavOverlayRoot, {
  Panel: NavOverlayPanel,
  Menu: NavOverlayMenu,
  MenuContent: NavOverlayMenuContent,
  MenuSection: NavOverlayMenuSection,
  MenuLink: NavOverlayMenuLink,
  MenuAction: NavOverlayMenuAction,
  MenuControl: NavOverlayMenuControl,
});
