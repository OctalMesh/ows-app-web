"use client";

import { useState } from "react";

import { IconMenu, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "@shared/ui/button";

import { useNavigationStore } from "../model";

export function MenuButton() {
  const isMenuOpen = useNavigationStore((state) => state.isMenuOpen);
  const toggleMenu = useNavigationStore((state) => state.toggleMenu);
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      className="z-110 h-16 w-16 rounded-full backdrop-blur-xl disabled:pointer-events-none disabled:opacity-60"
      onClick={toggleMenu}
      disabled={isAnimating}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isMenuOpen ? "close" : "menu"}
          initial={{ rotate: -180 }}
          animate={{ rotate: -180 }}
          exit={{ rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
          className="inline-flex"
        >
          {isMenuOpen ? (
            <IconX className="size-5" />
          ) : (
            <IconMenu className="size-5" />
          )}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
