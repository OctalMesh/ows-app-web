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
      variant="text"
      className={cn("h-10 w-20 text-primary", className)}
      onClick={onClick}
    >
      <IconChevronDown
        className={cn(
          "size-6 transition-transform duration-300",
          open && "rotate-180",
        )}
      />
    </Button>
  );
}
