"use client";

import type { JSX } from "react";

import { Button as ButtonPrimitive } from "@base-ui/react/button";

import { cn } from "@shared/lib/cn";

import { ButtonVariantsProps, buttonVariants } from "./button.styles";

export interface ButtonProps
  extends ButtonPrimitive.Props, ButtonVariantsProps {}

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps): JSX.Element {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
