"use client";

import type { JSX } from "react";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

export type ContextMenuPortalProps = ContextMenuPrimitive.Portal.Props;

export function ContextMenuPortal({
  ...props
}: ContextMenuPortalProps): JSX.Element {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}
