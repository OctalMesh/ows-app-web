"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type DrawerFooterProps = ComponentProps<"div">;

export function DrawerFooter({
  className,
  ...props
}: DrawerFooterProps): JSX.Element {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex shrink-0 flex-col gap-2 p-4 pt-0", className)}
      {...props}
    />
  );
}
