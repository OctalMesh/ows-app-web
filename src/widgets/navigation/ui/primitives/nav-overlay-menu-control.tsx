"use client";

import { JSX, ReactNode } from "react";

import { cn } from "@shared/lib";

export interface NavOverlayMenuControlProps {
  label: string;
  value?: string;
  control: ReactNode;
  className?: string;
}

export function NavOverlayMenuControl({
  label,
  value,
  control,
  className,
}: NavOverlayMenuControlProps): JSX.Element {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-[1.5rem] border border-border px-5 py-4",
        className,
      )}
    >
      <div>
        <p className="font-medium">{label}</p>
        {value ? (
          <p className="text-xs text-muted-foreground">{value}</p>
        ) : null}
      </div>
      {control}
    </div>
  );
}
