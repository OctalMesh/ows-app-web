"use client";

import type { ComponentProps, JSX } from "react";

import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire";

import { cn } from "@shared/lib/cn";

export type QuestionnaireTitleProps = ComponentProps<
  typeof QuestionnairePrimitive.Title
>;

export function QuestionnaireTitle({
  className,
  ...props
}: QuestionnaireTitleProps): JSX.Element {
  return (
    <QuestionnairePrimitive.Title
      data-slot="questionnaire-title"
      className={cn(
        "text-base font-semibold text-pretty [&:not(:has(~[data-slot=questionnaire-description]))]:mb-5",
        className,
      )}
      {...props}
    />
  );
}
