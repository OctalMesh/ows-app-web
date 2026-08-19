"use client";

import type { JSX } from "react";

import {
  IconAlertOctagon,
  IconAlertTriangle,
  IconCircleCheck,
  IconInfoCircle,
  IconLoader,
} from "@tabler/icons-react";

import { ToastType } from "./toast";

const TOAST_ICONS: Record<ToastType, JSX.Element> = {
  success: <IconCircleCheck aria-hidden="true" />,
  info: <IconInfoCircle aria-hidden="true" />,
  warning: <IconAlertTriangle aria-hidden="true" />,
  error: <IconAlertOctagon className="text-destructive" aria-hidden="true" />,
  loading: <IconLoader className="animate-spin" aria-hidden="true" />,
};

export interface ToastIconProps {
  type?: ToastType;
}

export function ToastIcon({ type }: ToastIconProps): JSX.Element | null {
  if (!type) {
    return null;
  }

  const icon = TOAST_ICONS[type];

  if (!icon) {
    return null;
  }

  return (
    <span
      data-slot="toast-icon"
      className="shrink-0 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4"
    >
      {icon}
    </span>
  );
}
