"use client";

import type { ComponentProps, JSX } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps): JSX.Element {
  const scriptProps =
    typeof window === "undefined"
      ? undefined
      : ({ type: "application/json" } as const);

  return (
    <NextThemesProvider
      defaultTheme="system"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
      scriptProps={scriptProps}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
