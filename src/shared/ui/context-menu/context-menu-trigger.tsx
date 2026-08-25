"use client";

import type { JSX } from "react";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

import { cn } from "@shared/lib/cn";

export type ContextMenuTriggerProps = ContextMenuPrimitive.Trigger.Props;

export function ContextMenuTrigger({
  className,
  ...props
}: ContextMenuTriggerProps): JSX.Element {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={cn("select-none", className)}
      {...props}
    />
  );
}
