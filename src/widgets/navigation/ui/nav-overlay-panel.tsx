"use client";

import type { ReactNode } from "react";

import { type NavOverlayKey, useNavigation } from "../model";
import { OverlayShell } from "./overlay-shell";

interface NavOverlayPanelProps {
  overlay: NavOverlayKey;
  children: ReactNode;
}

export function NavOverlayPanel({ overlay, children }: NavOverlayPanelProps) {
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
