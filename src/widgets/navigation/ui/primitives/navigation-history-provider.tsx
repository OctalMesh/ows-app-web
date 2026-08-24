"use client";

import type { JSX, ReactNode } from "react";
import { useCallback, useMemo, useReducer, useState } from "react";

import { NavigationHistoryContext } from "../../model/navigation-history-context";
import {
  NavigationHistoryActionType,
  PageStatus,
  type PageStatusType,
  createInitialState,
  navigationHistoryReducer,
} from "../../model/navigation-history-reducer";
import { PathnameObserver } from "./pathname-observer";

export interface NavigationHistoryProviderProps {
  children: ReactNode;
}

export function NavigationHistoryProvider({
  children,
}: NavigationHistoryProviderProps): JSX.Element {
  const [pathname, setPathname] = useState("");

  const [state, dispatch] = useReducer(
    navigationHistoryReducer,
    pathname,
    createInitialState,
  );

  const handlePathChange = useCallback((newPathname: string) => {
    setPathname(newPathname);

    dispatch({
      type: NavigationHistoryActionType.NAVIGATE,
      pathname: newPathname,
    });
  }, []);

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
      <PathnameObserver onChange={handlePathChange} />

      {children}
    </NavigationHistoryContext.Provider>
  );
}
