"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib/cn";

import { useCarousel } from "./use-carousel";

export type CarouselContentProps = ComponentProps<"div">;

export function CarouselContent({
  className,
  ...props
}: CarouselContentProps): JSX.Element {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
}
