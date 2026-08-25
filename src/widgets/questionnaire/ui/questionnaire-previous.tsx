"use client";

import type { ComponentProps, JSX } from "react";

import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire";

import { cn } from "@shared/lib/cn";
import { type Button, buttonVariants } from "@shared/ui/button";

export type QuestionnairePreviousProps = ComponentProps<
  typeof QuestionnairePrimitive.Previous
> &
  Pick<ComponentProps<typeof Button>, "size" | "variant">;

export function QuestionnairePrevious({
  children,
  className,
  size = "default",
  variant = "outline",
  ...props
}: QuestionnairePreviousProps): JSX.Element {
  return (
    <QuestionnairePrimitive.Previous
      data-slot="questionnaire-previous"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "col-start-1 row-start-1 min-h-11 justify-self-start sm:min-h-0",
        className,
      )}
      {...props}
    >
      {children ?? "Previous"}
    </QuestionnairePrimitive.Previous>
  );
}
