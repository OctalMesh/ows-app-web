"use client";

import { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type InputOtpGroupProps = ComponentProps<"div">;

export function InputOtpGroup({
  className,
  ...props
}: InputOtpGroupProps): JSX.Element {
  return (
    <div
      data-slot="input-otp-group"
      className={cn(
        "flex items-center rounded-3xl has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40",
        className,
      )}
      {...props}
    />
  );
}
