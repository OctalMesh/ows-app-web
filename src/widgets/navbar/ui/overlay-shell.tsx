"use client";

import type { ReactNode } from "react";

import { cn } from "@shared/lib";

export function OverlayCard({
  title,
  children,
  action,
}: {
  title: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-border/60 bg-background/80 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl md:p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-xs font-semibold tracking-[0.32em] text-muted-foreground uppercase">
          {title}
        </h3>
        {action}
      </div>
      {children}
    </section>
  );
}

export function DesktopOverlayShell({
  open,
  onClose,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      {open ? (
        <div
          className={cn(
            "fixed inset-0 z-50 flex items-stretch justify-center bg-background/20 p-3 backdrop-blur-xl md:p-6",
            className,
          )}
          onClick={onClose}
        >
          <div
            className="flex w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-background shadow-2xl"
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
