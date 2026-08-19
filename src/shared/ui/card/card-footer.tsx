"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type CardFooterProps = ComponentProps<"div">;

export function CardFooter({
  className,
  ...props
}: CardFooterProps): JSX.Element {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-4xl px-(--card-spacing) [.border-t]:pt-(--card-spacing)",
        className,
      )}
      {...props}
    />
  );
}
