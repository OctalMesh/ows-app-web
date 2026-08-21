"use client";

import { createContext } from "react";

import type { PageStatusType } from "./navigation-history-reducer";

export { PageStatus, type PageStatusType } from "./navigation-history-reducer";

export interface NavigationHistoryContextValue {
  previousPath: string | null;
  canGoBack: boolean;
  goBack: () => void;
  pageStatus: PageStatusType;
  setPageStatus: (status: PageStatusType) => void;
}

export const NavigationHistoryContext =
  createContext<NavigationHistoryContextValue | null>(null);
