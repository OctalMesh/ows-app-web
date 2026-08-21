const MAX_HISTORY_LENGTH = 30;

export const PageStatus = {
  DEFAULT: "default",
  ERROR: "error",
} as const;

export type PageStatusType = (typeof PageStatus)[keyof typeof PageStatus];

interface PageStatusEntry {
  pathname: string;
  status: PageStatusType;
}

export interface NavigationHistoryState {
  entries: string[];
  pageStatusEntry: PageStatusEntry | null;
}

export const NavigationHistoryActionType = {
  NAVIGATE: "navigate",
  BACK: "back",
  SET_PAGE_STATUS: "set-page-status",
} as const;

export type NavigationHistoryAction =
  | { type: typeof NavigationHistoryActionType.NAVIGATE; pathname: string }
  | { type: typeof NavigationHistoryActionType.BACK }
  | {
      type: typeof NavigationHistoryActionType.SET_PAGE_STATUS;
      pathname: string;
      status: PageStatusType;
    };

export function createInitialState(pathname: string): NavigationHistoryState {
  return { entries: [pathname], pageStatusEntry: null };
}

export function navigationHistoryReducer(
  state: NavigationHistoryState,
  action: NavigationHistoryAction,
): NavigationHistoryState {
  switch (action.type) {
    case NavigationHistoryActionType.NAVIGATE: {
      if (state.entries.at(-1) === action.pathname) {
        return state;
      }

      const updated = [...state.entries, action.pathname];
      const entries =
        updated.length > MAX_HISTORY_LENGTH
          ? updated.slice(-MAX_HISTORY_LENGTH)
          : updated;

      return { ...state, entries };
    }

    case NavigationHistoryActionType.BACK: {
      if (state.entries.length <= 1) {
        return state;
      }

      return { ...state, entries: state.entries.slice(0, -1) };
    }

    case NavigationHistoryActionType.SET_PAGE_STATUS: {
      const pageStatusEntry =
        action.status === PageStatus.DEFAULT
          ? null
          : { pathname: action.pathname, status: action.status };

      return { ...state, pageStatusEntry };
    }
  }
}
