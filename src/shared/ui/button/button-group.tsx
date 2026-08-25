"use client";

import { ComponentProps, type JSX } from "react";

import { cn } from "@shared/lib/cn";

import {
  ButtonGroupVariantsProps,
  buttonGroupVariants,
} from "./button-group.styles";

export interface ButtonGroupProps
  extends ComponentProps<"div">, ButtonGroupVariantsProps {}

export function ButtonGroup({
  className,
  orientation,
  ...props
}: ButtonGroupProps): JSX.Element {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  );
}
