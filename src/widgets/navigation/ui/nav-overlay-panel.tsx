"use client";

import { JSX, ReactNode } from "react";

import { useNavigation } from "../model";
import { NavOverlayKey } from "./nav-overlay";
import { OverlayShell } from "./overlay-shell";

export interface NavOverlayPanelProps {
  overlay: NavOverlayKey;
  children: ReactNode;
}

export function NavOverlayPanel({
  overlay,
  children,
}: NavOverlayPanelProps): JSX.Element {
  const { activeOverlay, closeOverlay } = useNavigation();

  return (
    <OverlayShell
      open={activeOverlay === overlay}
      action={() => closeOverlay(overlay)}
    >
      {children}
    </OverlayShell>
  );
}
