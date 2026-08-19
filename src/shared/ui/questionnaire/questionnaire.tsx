"use client";

import type { ComponentProps, JSX } from "react";

import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire";

import { cn } from "@shared/lib";

export type QuestionnaireProps = ComponentProps<
  typeof QuestionnairePrimitive.Root
>;

export function Questionnaire({
  className,
  ...props
}: QuestionnaireProps): JSX.Element {
  return (
    <QuestionnairePrimitive.Root
      data-slot="questionnaire"
      className={cn("flex w-full min-w-0 flex-col gap-6", className)}
      {...props}
    />
  );
}
