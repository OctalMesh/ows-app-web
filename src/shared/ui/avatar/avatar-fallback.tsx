"use client";

import type { JSX } from "react";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";

import { cn } from "@shared/lib";

export type AvatarFallbackProps = AvatarPrimitive.Fallback.Props;

export function AvatarFallback({
  className,
  ...props
}: AvatarFallbackProps): JSX.Element {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className,
      )}
      {...props}
    />
  );
}
