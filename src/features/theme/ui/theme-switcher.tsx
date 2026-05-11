"use client";

import { type ReactNode, useSyncExternalStore } from "react";

import { useTheme } from "next-themes";

import { Theme } from "@shared/config";

interface ThemeSwitchProps {
  light: ReactNode;
  dark: ReactNode;
  system?: ReactNode;
  fallback?: ReactNode;
}

const emptySubscribe = () => () => {
  /* empty */
};

export function ThemeSwitcher({
  light,
  dark,
  system,
  fallback,
}: ThemeSwitchProps) {
  const { theme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return fallback ?? null;
  }

  switch (theme) {
    case Theme.LIGHT:
      return light;
    case Theme.DARK:
      return dark;
    case Theme.SYSTEM:
      return system ?? light;
    default:
      return light;
  }
}
