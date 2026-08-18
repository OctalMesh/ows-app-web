"use client";

import type { ReactNode } from "react";

import { cn } from "@shared/lib";

import { useNavigation } from "../model";

interface NavBarProps {
  children: ReactNode;
  className?: string;
}

export function NavBar({ children, className }: NavBarProps) {
  const { setNavBarContainer } = useNavigation();

  return (
    <nav
      className={cn(
        "pointer-events-none fixed inset-x-0 z-100 transition-all duration-500 max-sm:bottom-0",
        "sm:top-0 sm:right-0 sm:left-auto sm:w-full sm:max-w-100 sm:p-4",
        "lg:max-w-120",
        className,
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div
        className={cn(
          "flex flex-row justify-between gap-3 px-3 py-3 *:pointer-events-auto",
          "sm:justify-end sm:gap-4",
        )}
      >
        {children}
      </div>

      <div ref={setNavBarContainer} className="pointer-events-auto" />
    </nav>
  );
}
