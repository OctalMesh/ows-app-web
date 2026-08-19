"use client";

import type { JSX } from "react";

import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import { cn } from "@shared/lib";

export type RadioGroupProps = RadioGroupPrimitive.Props;

export function RadioGroup({
  className,
  ...props
}: RadioGroupProps): JSX.Element {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid w-full gap-3", className)}
      {...props}
    />
  );
}
