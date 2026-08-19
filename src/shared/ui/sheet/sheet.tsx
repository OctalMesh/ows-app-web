"use client";

import type { JSX } from "react";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";

export type SheetProps = SheetPrimitive.Root.Props;

export function Sheet({ ...props }: SheetProps): JSX.Element {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}
