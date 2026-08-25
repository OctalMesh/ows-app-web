"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type DrawerHeaderProps = ComponentProps<"div">;

export function DrawerHeader({
  className,
  ...props
}: DrawerHeaderProps): JSX.Element {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "flex shrink-0 flex-col gap-0.5 p-4 pb-0 group-data-[swipe-axis=y]/drawer-popup:text-center md:gap-1.5 md:text-left",
        className,
      )}
      {...props}
    />
  );
}
