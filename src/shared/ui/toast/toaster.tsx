"use client";

import { JSX } from "react";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";

import { createToastManager } from "./create-toast-manager";
import { ToastList } from "./toast-list";
import { ToastPortal } from "./toast-portal";
import { ToastProvider } from "./toast-provider";
import { ToastViewport } from "./toast-viewport";

export type ToasterProps = ToastPrimitive.Provider.Props;

export function Toaster({
  children,
  toastManager = createToastManager(),
  ...props
}: ToasterProps): JSX.Element {
  return (
    <ToastProvider toastManager={toastManager} {...props}>
      {children}
      <ToastPortal>
        <ToastViewport>
          <ToastList />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  );
}
