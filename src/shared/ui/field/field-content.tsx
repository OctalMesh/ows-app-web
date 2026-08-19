"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type FieldContentProps = ComponentProps<"div">;

export function FieldContent({
  className,
  ...props
}: FieldContentProps): JSX.Element {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "group/field-content flex flex-1 flex-col gap-1 leading-snug",
        className,
      )}
      {...props}
    />
  );
}
