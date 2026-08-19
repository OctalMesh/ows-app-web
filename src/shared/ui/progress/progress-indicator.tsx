"use client";

import type { JSX } from "react";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { cn } from "@shared/lib";

export type ProgressIndicatorProps = ProgressPrimitive.Indicator.Props;

export function ProgressIndicator({
  className,
  ...props
}: ProgressIndicatorProps): JSX.Element {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn("h-full bg-primary transition-all", className)}
      {...props}
    />
  );
}
