"use client";

import type { ComponentProps, JSX } from "react";

import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire";

import { cn } from "@shared/lib";
import { type Button, buttonVariants } from "@shared/ui/button";

export type QuestionnaireNextProps = ComponentProps<
  typeof QuestionnairePrimitive.Next
> &
  Pick<ComponentProps<typeof Button>, "size" | "variant">;

export function QuestionnaireNext({
  children,
  className,
  size = "default",
  variant = "default",
  ...props
}: QuestionnaireNextProps): JSX.Element {
  return (
    <QuestionnairePrimitive.Next
      data-slot="questionnaire-next"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "col-start-3 row-start-1 min-h-11 justify-self-end sm:min-h-0",
        className,
      )}
      {...props}
    >
      {children ?? "Next"}
    </QuestionnairePrimitive.Next>
  );
}
