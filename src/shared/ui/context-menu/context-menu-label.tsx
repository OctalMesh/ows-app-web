"use client";

import type { JSX } from "react";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

import { cn } from "@shared/lib";

export interface ContextMenuLabelProps
  extends ContextMenuPrimitive.GroupLabel.Props {
  inset?: boolean;
}

export function ContextMenuLabel({
  className,
  inset,
  ...props
}: ContextMenuLabelProps): JSX.Element {
  return (
    <ContextMenuPrimitive.GroupLabel
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "px-3 py-2.5 text-xs text-muted-foreground data-inset:pl-9.5",
        className,
      )}
      {...props}
    />
  );
}
