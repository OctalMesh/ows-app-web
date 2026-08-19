"use client";

import type { ComponentProps, JSX } from "react";

import { IconChevronRight } from "@tabler/icons-react";

import { cn } from "@shared/lib";
import { Button } from "@shared/ui/button";

import { useCarousel } from "./use-carousel";

export type CarouselNextProps = ComponentProps<typeof Button>;

export function CarouselNext({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: CarouselNextProps): JSX.Element {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal"
          ? "inset-y-0 -right-12 my-auto"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <IconChevronRight />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}
