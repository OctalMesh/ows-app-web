"use client";

import type { JSX, ReactNode } from "react";

import { cn } from "@shared/lib";

export interface ErrorScreenBannerProps {
  children: ReactNode;
  className?: string;
}

export function ErrorScreenBanner({
  children,
  className,
}: ErrorScreenBannerProps): JSX.Element {
  return (
    <div className={cn("flex w-full shrink-0 flex-col p-8", className)}>
      <div
        className={cn(
          "relative flex min-h-[30vh] w-full flex-col items-center justify-center gap-10 px-8 py-12 md:flex-row md:justify-between md:px-16",
          "bg-[radial-gradient(currentColor_2px,transparent_2px)] [background-size:30px_30px] text-border",
        )}
      >
        <div className="relative z-10 flex w-full flex-col items-center justify-between gap-12 text-foreground md:flex-row">
          {children}
        </div>
      </div>
    </div>
  );
}
