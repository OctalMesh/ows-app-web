"use client";

import type { ComponentProps, JSX } from "react";

import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire";

import { cn } from "@shared/lib/cn";
import { type Button, buttonVariants } from "@shared/ui/button";

export type QuestionnaireSkipProps = ComponentProps<
  typeof QuestionnairePrimitive.Skip
> &
  Pick<ComponentProps<typeof Button>, "size" | "variant">;

export function QuestionnaireSkip({
  children,
  className,
  size = "default",
  variant = "outline",
  ...props
}: QuestionnaireSkipProps): JSX.Element {
  return (
    <QuestionnairePrimitive.Skip
      data-slot="questionnaire-skip"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "col-start-2 row-start-1 min-h-11 justify-self-end sm:min-h-0",
        className,
      )}
      {...props}
    >
      {children ?? "Skip"}
    </QuestionnairePrimitive.Skip>
  );
}
