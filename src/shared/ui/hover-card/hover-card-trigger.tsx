"use client";

import type { JSX } from "react";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";

export type HoverCardTriggerProps = PreviewCardPrimitive.Trigger.Props;

export function HoverCardTrigger({
  ...props
}: HoverCardTriggerProps): JSX.Element {
  return (
    <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
}
