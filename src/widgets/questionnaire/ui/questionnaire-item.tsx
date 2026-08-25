"use client";

import type { ComponentProps, JSX } from "react";

import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire";

import { cn } from "@shared/lib/cn";

export type QuestionnaireItemProps = ComponentProps<
  typeof QuestionnairePrimitive.Item
>;

export function QuestionnaireItem({
  className,
  ...props
}: QuestionnaireItemProps): JSX.Element {
  return (
    <QuestionnairePrimitive.Item
      data-slot="questionnaire-item"
      className={cn(
        "flex min-w-0 flex-col gap-5 border-0 p-0 outline-none",
        className,
      )}
      {...props}
    />
  );
}
