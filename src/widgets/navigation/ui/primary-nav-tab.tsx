"use client";

import { JSX, ReactNode } from "react";

import { cn } from "@shared/lib";

import { useNavigation } from "../model";
import { NavOverlayKey } from "./nav-overlay";
import { NavPrimaryItem } from "./nav-primary-item";

export interface PrimaryNavTabProps {
  overlay: NavOverlayKey;
  icon: ReactNode;
  label: string;
  count?: number;
}

export function PrimaryNavTab({
  overlay,
  icon,
  label,
  count,
}: PrimaryNavTabProps): JSX.Element {
  const { activeOverlay, openOverlay } = useNavigation();
  const active = activeOverlay === overlay;

  return (
    <NavPrimaryItem
      active={active}
      onClick={() => openOverlay(overlay)}
      ariaLabel={label}
      icon={
        typeof count === "number" ? (
          <span className="relative inline-flex">
            {icon}
            {count > 0 ? (
              <span
                className={cn(
                  "absolute -top-2 -right-2 inline-flex min-w-4 items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
                  active
                    ? "bg-background text-foreground"
                    : "bg-foreground text-background",
                )}
              >
                {count > 99 ? "99+" : count}
              </span>
            ) : null}
          </span>
        ) : (
          icon
        )
      }
      label={label}
    />
  );
}
