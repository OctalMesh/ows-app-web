"use client";

import { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type TableCaptionProps = ComponentProps<"caption">;

export function TableCaption({
  className,
  ...props
}: TableCaptionProps): JSX.Element {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}
