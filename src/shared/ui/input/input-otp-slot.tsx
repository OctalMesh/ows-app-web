"use client";

import { ComponentProps, JSX, useContext } from "react";

import { OTPInputContext } from "input-otp";

import { cn } from "@shared/lib/cn";

export interface InputOtpSlotProps extends ComponentProps<"div"> {
  index: number;
}

export function InputOtpSlot({
  index,
  className,
  ...props
}: InputOtpSlotProps): JSX.Element {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "relative flex size-9 items-center justify-center border-y border-r border-input bg-input/50 text-sm transition-all outline-none first:rounded-l-3xl first:border-l last:rounded-r-3xl aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-3 data-[active=true]:ring-ring/30 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
}
