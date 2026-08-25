"use client";

import { JSX, ReactNode } from "react";

import { cn } from "@shared/lib/cn";

export interface NavOverlayMenuSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function NavOverlayMenuSection({
  title,
  children,
  className,
}: NavOverlayMenuSectionProps): JSX.Element {
  return (
    <div className={cn("flex flex-col gap-2 p-6", className)}>
      <p className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        {title}
      </p>
      {children}
    </div>
  );
}
