"use client";

import { JSX } from "react";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";

export type ToastProviderProps = ToastPrimitive.Provider.Props;

export function ToastProvider({ ...props }: ToastProviderProps): JSX.Element {
  return <ToastPrimitive.Provider {...props} />;
}
