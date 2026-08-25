"use client";

import type { ComponentProps, JSX } from "react";

import { IconChevronLeft } from "@tabler/icons-react";

import { cn } from "@shared/lib/cn";
import { Button } from "@shared/ui/button";

import { useCarousel } from "./use-carousel";

export type CarouselPreviousProps = ComponentProps<typeof Button>;

export function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: CarouselPreviousProps): JSX.Element {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal"
          ? "inset-y-0 -left-12 my-auto"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <IconChevronLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}
