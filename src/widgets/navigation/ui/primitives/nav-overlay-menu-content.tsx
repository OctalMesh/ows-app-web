"use client";

import { JSX, ReactNode } from "react";

import { cn } from "@shared/lib";

export interface NavOverlayMenuContentProps {
  children: ReactNode;
  className?: string;
}

export function NavOverlayMenuContent({
  children,
  className,
}: NavOverlayMenuContentProps): JSX.Element {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 divide-y max-sm:pb-20 sm:pt-20",
        className,
      )}
    >
      {children}
    </div>
  );
}
