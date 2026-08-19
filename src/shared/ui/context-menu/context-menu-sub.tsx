"use client";

import type { JSX } from "react";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

export type ContextMenuSubProps = ContextMenuPrimitive.SubmenuRoot.Props;

export function ContextMenuSub({ ...props }: ContextMenuSubProps): JSX.Element {
  return (
    <ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />
  );
}
