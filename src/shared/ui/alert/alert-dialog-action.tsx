"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";
import { Button } from "@shared/ui/button";

export type AlertDialogActionProps = ComponentProps<typeof Button>;

export function AlertDialogAction({
  className,
  ...props
}: AlertDialogActionProps): JSX.Element {
  return (
    <Button
      data-slot="alert-dialog-action"
      className={cn(className)}
      {...props}
    />
  );
}
