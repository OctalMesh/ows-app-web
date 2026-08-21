"use client";

import { JSX, ReactNode } from "react";

import { cn } from "@shared/lib";

export interface NavPrimaryListProps {
  children: ReactNode;
  className?: string;
}

export function NavPrimaryList({
  children,
  className,
}: NavPrimaryListProps): JSX.Element {
  return (
    <div
      className={cn(
        "z-100 flex flex-1 items-stretch gap-1 rounded-full border border-border p-1 backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
