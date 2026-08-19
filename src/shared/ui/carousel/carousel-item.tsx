"use client";

import type { ComponentProps, JSX } from "react";

import { cn } from "@shared/lib";

import { useCarousel } from "./use-carousel";

export type CarouselItemProps = ComponentProps<"div">;

export function CarouselItem({
  className,
  ...props
}: CarouselItemProps): JSX.Element {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
}
