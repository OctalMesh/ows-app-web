"use client";

import { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type TableBodyProps = ComponentProps<"tbody">;

export function TableBody({
  className,
  ...props
}: TableBodyProps): JSX.Element {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}
