"use client";

import { ReactNode, useRef } from "react";

import { cn } from "@shared/lib";

import { ArticleContext } from "../model";

export interface ArticleShellProps {
  children: ReactNode;
  className?: string;
}

export function ArticleShell({ children, className }: ArticleShellProps) {
  const contentRef = useRef<HTMLElement>(null);

  return (
    <ArticleContext.Provider value={{ contentRef }}>
      <div
        className={cn(
          "grid grid-cols-1 divide-x lg:grid-cols-[1fr_3fr] xl:grid-cols-[1fr_2fr_1fr]",
          className,
        )}
      >
        {children}

        <div aria-hidden className="hidden lg:block" />
      </div>
    </ArticleContext.Provider>
  );
}
