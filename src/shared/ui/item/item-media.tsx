"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

import {
  type ItemMediaVariantsProps,
  itemMediaVariants,
} from "./item-media.styles";

export type ItemMediaProps = ComponentProps<"div"> & ItemMediaVariantsProps;

export function ItemMedia({
  className,
  variant = "default",
  ...props
}: ItemMediaProps): JSX.Element {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  );
}
