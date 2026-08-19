"use client";

import { ComponentProps, JSX } from "react";

import { OTPInput } from "input-otp";

import { cn } from "@shared/lib";

export type InputOtpProps = ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
};

export function InputOtp({
  className,
  containerClassName,
  ...props
}: InputOtpProps): JSX.Element {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "cn-input-otp flex items-center has-disabled:opacity-50",
        containerClassName,
      )}
      spellCheck={false}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}
