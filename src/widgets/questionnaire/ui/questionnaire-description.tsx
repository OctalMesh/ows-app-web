"use client";

import type { ComponentProps, JSX } from "react";

import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire";

import { cn } from "@shared/lib/cn";

export type QuestionnaireDescriptionProps = ComponentProps<
  typeof QuestionnairePrimitive.Description
>;

export function QuestionnaireDescription({
  className,
  ...props
}: QuestionnaireDescriptionProps): JSX.Element {
  return (
    <QuestionnairePrimitive.Description
      data-slot="questionnaire-description"
      className={cn("text-sm text-pretty text-muted-foreground", className)}
      {...props}
    />
  );
}
