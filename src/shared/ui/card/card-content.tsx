"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type CardContentProps = ComponentProps<"div">;

export function CardContent({
  className,
  ...props
}: CardContentProps): JSX.Element {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing)", className)}
      {...props}
    />
  );
}
