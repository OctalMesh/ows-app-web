"use client";

import { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type TableProps = ComponentProps<"table">;

export function Table({ className, ...props }: TableProps): JSX.Element {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
}
