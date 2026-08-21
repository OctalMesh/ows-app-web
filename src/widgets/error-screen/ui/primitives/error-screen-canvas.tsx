"use client";

import type { JSX, ReactNode } from "react";

import { cn } from "@shared/lib";

export interface ErrorScreenCanvasProps {
  children?: ReactNode;
  className?: string;
}

export function ErrorScreenCanvas({
  children,
  className,
}: ErrorScreenCanvasProps): JSX.Element {
  return (
    <div
      className={cn(
        "relative h-full flex-1 overflow-hidden border-b bg-foreground/2",
        className,
      )}
    >
      {children}
    </div>
  );
}
