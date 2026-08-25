"use client";

import type { RefObject } from "react";
import { useRef } from "react";

export function useComboboxAnchor(): RefObject<HTMLDivElement | null> {
  return useRef<HTMLDivElement | null>(null);
}
