"use client";

import { type RefObject, useEffect, useState } from "react";

import { cn } from "@shared/lib";

export interface TocIndicatorProps {
  containerRef: RefObject<HTMLDivElement | null>;
  activeIds: Set<string>;
  className?: string;
}

export function ArticleTocIndicator({
  containerRef,
  activeIds,
  className,
}: TocIndicatorProps) {
  const [indicator, setIndicator] = useState({
    top: 0,
    height: 0,
    opacity: 0,
  });

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const activeElements = Array.from(activeIds)
      .map(
        (id) =>
          container.querySelector(
            `[data-toc-id="${id}"]`,
          ) as HTMLElement | null,
      )
      .filter((element): element is HTMLElement => element !== null);

    if (activeElements.length === 0) {
      setIndicator((prev) => ({
        ...prev,
        opacity: 0,
      }));

      return;
    }

    const minTop = Math.min(
      ...activeElements.map((element) => element.offsetTop),
    );

    const maxBottom = Math.max(
      ...activeElements.map(
        (element) => element.offsetTop + element.offsetHeight,
      ),
    );

    setIndicator({
      top: minTop,
      height: maxBottom - minTop,
      opacity: 1,
    });
  }, [activeIds, containerRef]);

  return (
    <div
      role="none"
      className={cn(
        "absolute -left-px w-0.5 bg-primary transition-all duration-300 ease-out",
        className,
      )}
      style={{
        top: indicator.top,
        height: indicator.height,
        opacity: indicator.opacity,
      }}
    />
  );
}
