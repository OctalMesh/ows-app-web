"use client";

import type { JSX } from "react";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";

export type HoverCardProps = PreviewCardPrimitive.Root.Props;

export function HoverCard({ ...props }: HoverCardProps): JSX.Element {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />;
}
