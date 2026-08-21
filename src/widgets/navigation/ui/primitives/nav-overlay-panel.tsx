"use client";

import { JSX, ReactNode } from "react";

import { type NavOverlayKey, useNavigation } from "../../model";
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
