"use client";

import { useContext } from "react";

import {
  NavigationHistoryContext,
  type NavigationHistoryContextValue,
} from "./navigation-history-context";

export function useNavigationHistory(): NavigationHistoryContextValue {
  const context = useContext(NavigationHistoryContext);

  if (!context) {
    throw new Error(
      "useNavigationHistory must be used within NavigationHistoryProvider",
    );
  }

  return context;
}
