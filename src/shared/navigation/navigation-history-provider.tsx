"use client";

import type { ReactNode } from "react";
import { useCallback, useState } from "react";

import { usePathname } from "@shared/i18n";

import { NavigationHistoryContext } from "./navigation-history-context";

const MAX_HISTORY_LENGTH = 30;

export interface NavigationHistoryProviderProps {
  children: ReactNode;
}

export function NavigationHistoryProvider({
  children,
}: NavigationHistoryProviderProps) {
  const pathname = usePathname();
  const [history, setHistory] = useState<string[]>([pathname]);

  if (history.at(-1) !== pathname) {
    setHistory((prev) => {
      if (prev.at(-1) === pathname) {
        return prev;
      }

      const updated = [...prev, pathname];

      return updated.length > MAX_HISTORY_LENGTH
        ? updated.slice(-MAX_HISTORY_LENGTH)
        : updated;
    });
  }

  const goBack = useCallback(() => {
    setHistory((prev) => {
      return prev.length <= 1 ? prev : prev.slice(0, -1);
    });
  }, []);

  const previousPath = history.length > 1 ? (history.at(-2) ?? null) : null;
  const canGoBack = history.length > 1;

  return (
    <NavigationHistoryContext.Provider
      value={{
        previousPath,
        canGoBack,
        goBack,
      }}
    >
      {children}
    </NavigationHistoryContext.Provider>
  );
}
