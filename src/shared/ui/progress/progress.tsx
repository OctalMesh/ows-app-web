"use client";

import type { JSX } from "react";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { cn } from "@shared/lib/cn";

import { ProgressIndicator } from "./progress-indicator";
import { ProgressTrack } from "./progress-track";

export type ProgressProps = ProgressPrimitive.Root.Props;

export function Progress({
  className,
  children,
  value,
  ...props
}: ProgressProps): JSX.Element {
  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="progress"
      className={cn("flex flex-wrap gap-3", className)}
      {...props}
    >
      {children}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  );
}
