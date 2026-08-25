"use client";

import { JSX, ReactNode } from "react";

import { cn } from "@shared/lib/cn";

export interface OverlayShellProps {
  open: boolean;
  action: () => void;
  children: ReactNode;
  className?: string;
}

export function OverlayShell({
  open,
  action,
  children,
  className,
}: OverlayShellProps): JSX.Element {
  return (
    <>
      {open ? (
        <div
          className={cn(
            "fixed inset-0 z-50 flex items-stretch justify-center bg-background/20 p-3 backdrop-blur-xl md:p-6",
            className,
          )}
          onClick={action}
        >
          <div
            className="flex w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-border bg-background shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid flex-1 gap-4 overflow-y-auto p-4 md:p-6">
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
