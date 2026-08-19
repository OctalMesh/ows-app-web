"use client";

import type { JSX } from "react";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";

import { cn } from "@shared/lib";

import { ScrollBar } from "./scroll-bar";

export interface ScrollAreaProps extends ScrollAreaPrimitive.Root.Props {
  showBar?: boolean;
}

export function ScrollArea({
  className,
  children,
  showBar = true,
  ...props
}: ScrollAreaProps): JSX.Element {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>

      {showBar && (
        <>
          <ScrollBar orientation="horizontal" />
          <ScrollBar orientation="vertical" />
          <ScrollAreaPrimitive.Corner />
        </>
      )}
    </ScrollAreaPrimitive.Root>
  );
}
