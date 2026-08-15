"use client";

import type { ReactNode } from "react";

import { cn } from "@shared/lib";

interface NavOverlayMenuContentProps {
  children: ReactNode;
  className?: string;
}

export function NavOverlayMenuContent({
  children,
  className,
}: NavOverlayMenuContentProps) {
  return (
    <div className={cn("flex flex-col gap-8 max-sm:pb-20 sm:pt-20", className)}>
      {children}
    </div>
  );
}
