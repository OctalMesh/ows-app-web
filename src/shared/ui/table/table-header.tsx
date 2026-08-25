"use client";

import { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type TableHeaderProps = ComponentProps<"thead">;

export function TableHeader({
  className,
  ...props
}: TableHeaderProps): JSX.Element {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  );
}
