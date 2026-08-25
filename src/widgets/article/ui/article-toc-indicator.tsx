"use client";

import {
  type JSX,
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "motion/react";

import { cn } from "@shared/lib/cn";

export interface TocIndicatorProps {
  containerRef: RefObject<HTMLDivElement | null>;
  activeIds: Set<string>;
  className?: string;
}

export function ArticleTocIndicator({
  containerRef,
  activeIds,
  className,
}: TocIndicatorProps): JSX.Element {
  const [indicator, setIndicator] = useState({
    top: 0,
    height: 0,
    opacity: 0,
  });

  const measurementsRef = useRef<Map<string, { top: number; bottom: number }>>(
    new Map(),
  );

  const activeIdsRef = useRef(activeIds);
  useEffect(() => {
    activeIdsRef.current = activeIds;
  }, [activeIds]);

  const updateIndicator = useCallback(() => {
    const ids = activeIdsRef.current;

    if (ids.size === 0) {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    let minTop = Infinity;
    let maxBottom = -Infinity;
    let hasValidMeasurements = false;

    for (const id of ids) {
      const rect = measurementsRef.current.get(id);
      if (rect) {
        minTop = Math.min(minTop, rect.top);
        maxBottom = Math.max(maxBottom, rect.bottom);
        hasValidMeasurements = true;
      }
    }

    if (hasValidMeasurements) {
      setIndicator({
        top: minTop,
        height: maxBottom - minTop,
        opacity: 1,
      });
    }
  }, []);

  useEffect(() => {
    updateIndicator();
  }, [activeIds, updateIndicator]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const measureDOM = () => {
      const elements = container.querySelectorAll<HTMLElement>("[data-toc-id]");
      let layoutChanged = false;

      elements.forEach((el) => {
        const id = el.getAttribute("data-toc-id");
        if (!id) return;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        const existing = measurementsRef.current.get(id);

        if (!existing || existing.top !== top || existing.bottom !== bottom) {
          measurementsRef.current.set(id, { top, bottom });
          layoutChanged = true;
        }
      });

      if (layoutChanged) {
        updateIndicator();
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      measureDOM();
    });
    resizeObserver.observe(container);

    const mutationObserver = new MutationObserver(() => {
      measureDOM();
    });
    mutationObserver.observe(container, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    const rafId = requestAnimationFrame(measureDOM);

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [containerRef, updateIndicator]);

  return (
    <motion.div
      role="none"
      className={cn("absolute -left-px w-0.5 bg-primary", className)}
      initial={false}
      animate={{
        top: indicator.top,
        height: indicator.height,
        opacity: indicator.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
        mass: 1,
      }}
    />
  );
}
