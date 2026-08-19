"use client";

import type { JSX } from "react";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

export type ContextMenuGroupProps = ContextMenuPrimitive.Group.Props;

export function ContextMenuGroup({
  ...props
}: ContextMenuGroupProps): JSX.Element {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  );
}
