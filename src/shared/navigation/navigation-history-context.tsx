import { createContext } from "react";

export interface NavigationHistoryContextValue {
  previousPath: string | null;
  canGoBack: boolean;
  goBack: () => void;
}

export const NavigationHistoryContext =
  createContext<NavigationHistoryContextValue | null>(null);
