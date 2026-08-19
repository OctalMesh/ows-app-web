"use client";

import type { JSX } from "react";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";

export type SheetPortalProps = SheetPrimitive.Portal.Props;

export function SheetPortal({ ...props }: SheetPortalProps): JSX.Element {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}
