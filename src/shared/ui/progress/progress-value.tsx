"use client";

import type { JSX } from "react";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { cn } from "@shared/lib";

export type ProgressValueProps = ProgressPrimitive.Value.Props;

export function ProgressValue({
  className,
  ...props
}: ProgressValueProps): JSX.Element {
  return (
    <ProgressPrimitive.Value
      className={cn(
        "ml-auto text-sm text-muted-foreground tabular-nums",
        className,
      )}
      data-slot="progress-value"
      {...props}
    />
  );
}
