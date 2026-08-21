"use client";

import { createContext, useContext } from "react";

export interface ErrorScreenContextValue {
  statusCode: number;
}

export const ErrorScreenContext = createContext<ErrorScreenContextValue | null>(
  null,
);

export function useErrorScreen(): ErrorScreenContextValue {
  const context = useContext(ErrorScreenContext);

  if (!context) {
    throw new Error("ErrorScreen components must be used within <ErrorScreen>");
  }

  return context;
}
