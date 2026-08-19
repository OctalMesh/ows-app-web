"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type MarkerIconProps = ComponentProps<"span">;

export function MarkerIcon({
  className,
  ...props
}: MarkerIconProps): JSX.Element {
  return (
    <span
      data-slot="marker-icon"
      aria-hidden="true"
      className={cn(
        "size-4 shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}
