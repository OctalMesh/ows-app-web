"use client";

import type { ComponentProps, JSX } from "react";

import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire";

import { cn } from "@shared/lib";

export type QuestionnaireErrorProps = ComponentProps<
  typeof QuestionnairePrimitive.Error
>;

export function QuestionnaireError({
  className,
  ...props
}: QuestionnaireErrorProps): JSX.Element {
  return (
    <QuestionnairePrimitive.Error
      data-slot="questionnaire-error"
      className={cn("mt-2 text-sm text-destructive", className)}
      {...props}
    />
  );
}
