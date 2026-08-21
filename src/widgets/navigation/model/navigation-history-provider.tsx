"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useMemo, useReducer } from "react";

import { usePathname } from "@shared/i18n";

import { NavigationHistoryContext } from "./navigation-history-context";
import {
  NavigationHistoryActionType,
  PageStatus,
  type PageStatusType,
  createInitialState,
  navigationHistoryReducer,
} from "./navigation-history-reducer";

export interface NavigationHistoryProviderProps {
  children: ReactNode;
}

export function NavigationHistoryProvider({
  children,
}: NavigationHistoryProviderProps) {
  const pathname = usePathname();

  const [state, dispatch] = useReducer(
    navigationHistoryReducer,
    pathname,
    createInitialState,
  );

  useEffect(() => {
    dispatch({ type: NavigationHistoryActionType.NAVIGATE, pathname });
  }, [pathname]);

  const goBack = useCallback(() => {
    dispatch({ type: NavigationHistoryActionType.BACK });
  }, []);

  const setPageStatus = useCallback(
    (status: PageStatusType) => {
      dispatch({
        type: NavigationHistoryActionType.SET_PAGE_STATUS,
        pathname,
        status,
      });
    },
    [pathname],
  );

  const previousPath =
    state.entries.length > 1 ? (state.entries.at(-2) ?? null) : null;
  const canGoBack = state.entries.length > 1;

  const pageStatus: PageStatusType =
    state.pageStatusEntry?.pathname === pathname
      ? state.pageStatusEntry.status
      : PageStatus.DEFAULT;

  const value = useMemo(
    () => ({ previousPath, canGoBack, goBack, pageStatus, setPageStatus }),
    [previousPath, canGoBack, goBack, pageStatus, setPageStatus],
  );

  return (
    <NavigationHistoryContext.Provider value={value}>
      {children}
    </NavigationHistoryContext.Provider>
  );
}
