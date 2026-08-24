"use client";

import { JSX, ReactNode } from "react";

import { cn } from "@shared/lib";
import { Button, type ButtonProps } from "@shared/ui/button";

export interface NavPillButtonProps extends ButtonProps {
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
}: NavPillButtonProps): JSX.Element {
  return (
    <Button
      type="button"
      variant="outline-blurred"
      size="lg"
      aria-label={ariaLabel ?? label}
      className={cn(
        "flex h-16 items-center justify-start gap-4 rounded-full px-6",
        className,
      )}
      onClick={onClick}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </Button>
  );
}
