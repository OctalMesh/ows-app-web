"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type CardDescriptionProps = ComponentProps<"div">;

export function CardDescription({
  className,
  ...props
}: CardDescriptionProps): JSX.Element {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}
