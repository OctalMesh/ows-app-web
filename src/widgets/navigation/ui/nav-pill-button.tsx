"use client";

import type { ReactNode } from "react";

import { cn } from "@shared/lib";
import { Button } from "@shared/ui/button";

interface NavPillButtonProps {
  icon: ReactNode;
  label: string;
  ariaLabel?: string;
  onClick?: () => void;
  className?: string;
}

export function NavPillButton({
  icon,
  label,
  ariaLabel,
  onClick,
  className,
}: NavPillButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      aria-label={ariaLabel ?? label}
      className={cn(
        "flex h-16 items-center justify-start gap-4 rounded-full px-6 backdrop-blur-xl",
        className,
      )}
      onClick={onClick}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </Button>
  );
}
