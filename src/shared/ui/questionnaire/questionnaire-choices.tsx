"use client";

import type { ComponentProps, JSX } from "react";

import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire";

import { cn } from "@shared/lib";

export type QuestionnaireChoicesProps = ComponentProps<
  typeof QuestionnairePrimitive.Choices
>;

export function QuestionnaireChoices({
  className,
  ...props
}: QuestionnaireChoicesProps): JSX.Element {
  return (
    <QuestionnairePrimitive.Choices
      data-slot="questionnaire-choices"
      className={cn(
        "group/questionnaire-choices grid min-w-0 gap-3",
        className,
      )}
      {...props}
    />
  );
}
