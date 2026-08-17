import { ComponentProps } from "react";

import { type VariantProps } from "class-variance-authority";

import { cn } from "@shared/lib";

import { buttonGroupVariants } from "./button-group.styles";

export function ButtonGroup({
  className,
  orientation,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
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
