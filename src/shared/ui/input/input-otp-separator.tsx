"use client";

import { ComponentProps, JSX } from "react";

import { IconMinus } from "@tabler/icons-react";

export type InputOtpSeparatorProps = ComponentProps<"div">;

export function InputOtpSeparator({
  ...props
}: InputOtpSeparatorProps): JSX.Element {
  return (
    <div
      data-slot="input-otp-separator"
      className="flex items-center [&_svg:not([class*='size-'])]:size-4"
      role="separator"
      {...props}
    >
      <IconMinus />
    </div>
  );
}
