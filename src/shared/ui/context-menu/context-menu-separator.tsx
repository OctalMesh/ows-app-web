"use client";

import type { JSX } from "react";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

import { cn } from "@shared/lib";

export type ContextMenuSeparatorProps = ContextMenuPrimitive.Separator.Props;

export function ContextMenuSeparator({
  className,
  ...props
}: ContextMenuSeparatorProps): JSX.Element {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("-mx-1.5 my-1.5 h-px bg-border/50", className)}
      {...props}
    />
  );
}
