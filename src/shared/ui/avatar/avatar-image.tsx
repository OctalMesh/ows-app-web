"use client";

import type { JSX } from "react";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";

import { cn } from "@shared/lib";

export type AvatarImageProps = AvatarPrimitive.Image.Props;

export function AvatarImage({
  className,
  ...props
}: AvatarImageProps): JSX.Element {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full rounded-full object-cover",
        className,
      )}
      {...props}
    />
  );
}
