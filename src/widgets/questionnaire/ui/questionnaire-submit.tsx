"use client";

import type { ComponentProps, JSX } from "react";

import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire";

import { cn } from "@shared/lib/cn";
import { type Button, buttonVariants } from "@shared/ui/button";

export type QuestionnaireSubmitProps = ComponentProps<
  typeof QuestionnairePrimitive.Submit
> &
  Pick<ComponentProps<typeof Button>, "size" | "variant">;

export function QuestionnaireSubmit({
  children,
  className,
  size = "default",
  variant = "default",
  ...props
}: QuestionnaireSubmitProps): JSX.Element {
  return (
    <QuestionnairePrimitive.Submit
      data-slot="questionnaire-submit"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "col-start-3 row-start-1 min-h-11 justify-self-end sm:min-h-0",
        className,
      )}
      {...props}
    >
      {children ?? "Submit"}
    </QuestionnairePrimitive.Submit>
  );
}
