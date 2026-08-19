"use client";

import type { JSX } from "react";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";

export type SheetCloseProps = SheetPrimitive.Close.Props;

export function SheetClose({ ...props }: SheetCloseProps): JSX.Element {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}
