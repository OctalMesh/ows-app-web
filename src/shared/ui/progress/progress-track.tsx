"use client";

import type { JSX } from "react";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { cn } from "@shared/lib";

export type ProgressTrackProps = ProgressPrimitive.Track.Props;

export function ProgressTrack({
  className,
  ...props
}: ProgressTrackProps): JSX.Element {
  return (
    <ProgressPrimitive.Track
      className={cn(
        "relative flex h-3 w-full items-center overflow-x-hidden rounded-full bg-muted",
        className,
      )}
      data-slot="progress-track"
      {...props}
    />
  );
}
