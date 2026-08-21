"use client";

import type { JSX, ReactNode } from "react";

import { cn } from "@shared/lib";

import { ErrorScreenContext } from "../../model";

export interface ErrorScreenShellProps {
  children: ReactNode;
  statusCode?: number;
  className?: string;
}

export function ErrorScreenShell({
  children,
  statusCode = 404,
  className,
}: ErrorScreenShellProps): JSX.Element {
  return (
    <ErrorScreenContext.Provider value={{ statusCode }}>
      <div
        className={cn(
          "flex h-svh w-full flex-col overflow-hidden bg-background text-foreground",
          className,
        )}
      >
        {children}
      </div>
    </ErrorScreenContext.Provider>
  );
}
