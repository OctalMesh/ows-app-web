"use client";

import type { ReactNode } from "react";

import { cn } from "@shared/lib";

interface NavPrimaryListProps {
  children: ReactNode;
  className?: string;
}

export function NavPrimaryList({ children, className }: NavPrimaryListProps) {
  return (
    <div
      className={cn(
        "z-100 flex flex-1 items-stretch gap-1 rounded-full border border-border/70 p-1 backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
