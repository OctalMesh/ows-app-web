"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

export type QuestionnaireChoiceDescriptionProps = ComponentProps<"span">;

export function QuestionnaireChoiceDescription({
  className,
  ...props
}: QuestionnaireChoiceDescriptionProps): JSX.Element {
  return (
    <span
      data-slot="questionnaire-choice-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}
