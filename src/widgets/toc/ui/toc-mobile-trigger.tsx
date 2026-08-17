"use client";

import { IconChevronDown } from "@tabler/icons-react";

import { cn } from "@shared/lib";
import { Button } from "@shared/ui";

export interface TocMobileTriggerProps {
  open: boolean;
  onClick: () => void;
  className?: string;
}

export function TocMobileTrigger({
  open,
  onClick,
  className,
}: TocMobileTriggerProps) {
  return (
    <Button
      type="button"
      variant="outline"
      className={cn(
        "flex h-8 w-20 items-center justify-center rounded-full backdrop-blur-xl",
        className,
      )}
      onClick={onClick}
    >
      <IconChevronDown
        className={cn(
          "size-5 transition-transform duration-300",
          open && "rotate-180",
        )}
      />
    </Button>
  );
}
