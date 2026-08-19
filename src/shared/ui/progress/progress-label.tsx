"use client";

import type { JSX } from "react";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { cn } from "@shared/lib";

export type ProgressLabelProps = ProgressPrimitive.Label.Props;

export function ProgressLabel({
  className,
  ...props
}: ProgressLabelProps): JSX.Element {
  return (
    <ProgressPrimitive.Label
      className={cn("text-sm font-medium", className)}
      data-slot="progress-label"
      {...props}
    />
  );
}
