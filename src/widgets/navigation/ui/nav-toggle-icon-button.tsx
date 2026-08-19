"use client";

import { JSX, type ReactNode, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { cn } from "@shared/lib";
import { Button } from "@shared/ui/button";

export interface NavToggleIconButtonProps {
  isActive: boolean;
  onToggle: () => void;
  activeIcon: ReactNode;
  inactiveIcon: ReactNode;
  ariaLabel: string;
  className?: string;
}

export function NavToggleIconButton({
  isActive,
  onToggle,
  activeIcon,
  inactiveIcon,
  ariaLabel,
  className,
}: NavToggleIconButtonProps): JSX.Element {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <Button
      variant="outline-blurred"
      size="lg"
      aria-label={ariaLabel}
      className={cn(
        "z-110 h-16 w-16 rounded-full disabled:pointer-events-none disabled:opacity-60",
        className,
      )}
      onClick={onToggle}
      disabled={isAnimating}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isActive ? "active" : "inactive"}
          initial={{ rotate: -180 }}
          animate={{ rotate: -180 }}
          exit={{ rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
          className="inline-flex"
        >
          {isActive ? activeIcon : inactiveIcon}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
