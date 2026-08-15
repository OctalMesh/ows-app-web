"use client";

import type { ReactNode } from "react";

import { cn } from "@shared/lib";

interface NavOverlayMenuSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function NavOverlayMenuSection({
  title,
  children,
  className,
}: NavOverlayMenuSectionProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 border-b p-6 last:border-b-0",
        className,
      )}
    >
      <p className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        {title}
      </p>
      {children}
    </div>
  );
}
