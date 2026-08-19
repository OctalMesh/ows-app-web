"use client";

import type { JSX } from "react";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

export type ContextMenuProps = ContextMenuPrimitive.Root.Props;

export function ContextMenu({ ...props }: ContextMenuProps): JSX.Element {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}
