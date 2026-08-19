"use client";

import { JSX } from "react";

import { Toast, ToastType } from "./toast";
import { ToastAction } from "./toast-action";
import { ToastClose } from "./toast-close";
import { ToastContent } from "./toast-content";
import { ToastDescription } from "./toast-description";
import { ToastIcon } from "./toast-icon";
import { ToastTitle } from "./toast-title";
import { useToastManager } from "./use-toast-manager";

export type ToastListProps = {
  className?: string;
};

export function ToastList({ className }: ToastListProps): JSX.Element[] {
  const { toasts } = useToastManager();

  return toasts.map((toastItem) => (
    <Toast key={toastItem.id} toast={toastItem}>
      <ToastContent className={className}>
        <ToastIcon type={toastItem.type as ToastType} />

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <ToastTitle />
          <ToastDescription />
        </div>

        <ToastAction />
        <ToastClose />
      </ToastContent>
    </Toast>
  ));
}
