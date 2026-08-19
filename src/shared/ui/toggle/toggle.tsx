"use client";

import { JSX } from "react";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";

import { cn } from "@shared/lib";

import { ToggleVariantsProps, toggleVariants } from "./toggle.styles";

export type ToggleProps = TogglePrimitive.Props & ToggleVariantsProps;

export function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: ToggleProps): JSX.Element {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}
