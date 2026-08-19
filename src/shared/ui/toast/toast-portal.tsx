"use client";

import { JSX } from "react";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";

export type ToastPortalProps = ToastPrimitive.Portal.Props;

export function ToastPortal({ ...props }: ToastPortalProps): JSX.Element {
  return <ToastPrimitive.Portal data-slot="toast-portal" {...props} />;
}
