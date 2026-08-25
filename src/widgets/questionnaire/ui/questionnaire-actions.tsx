"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

export type QuestionnaireActionsProps = ComponentProps<"div">;

export function QuestionnaireActions({
  className,
  ...props
}: QuestionnaireActionsProps): JSX.Element {
  return (
    <div
      data-slot="questionnaire-actions"
      className={cn(
        "grid min-h-11 w-full grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 sm:min-h-9",
        className,
      )}
      {...props}
    />
  );
}
