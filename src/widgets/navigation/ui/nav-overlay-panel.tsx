"use client";

import type { ReactNode } from "react";

import { type NavOverlayKey, useNavigation } from "../model";
import { DesktopOverlayShell } from "./overlay-shell";

interface NavOverlayPanelProps {
  overlay: NavOverlayKey;
  children: ReactNode;
}

export function NavOverlayPanel({ overlay, children }: NavOverlayPanelProps) {
  const { activeOverlay, closeOverlay } = useNavigation();

  return (
    <DesktopOverlayShell
      open={activeOverlay === overlay}
      onClose={() => closeOverlay(overlay)}
    >
      {children}
    </DesktopOverlayShell>
  );
}
