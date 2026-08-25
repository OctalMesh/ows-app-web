"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type CardTitleProps = ComponentProps<"div">;

export function CardTitle({
  className,
  ...props
}: CardTitleProps): JSX.Element {
  return (
    <div
      data-slot="card-title"
      className={cn("text-base font-medium", className)}
      {...props}
    />
  );
}
