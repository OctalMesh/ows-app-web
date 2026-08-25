"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type ContextMenuShortcutProps = ComponentProps<"span">;

export function ContextMenuShortcut({
  className,
  ...props
}: ContextMenuShortcutProps): JSX.Element {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/context-menu-item:text-accent-foreground",
        className,
      )}
      {...props}
    />
  );
}
