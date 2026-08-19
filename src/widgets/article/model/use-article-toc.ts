"use client";

import type { RefObject } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import type { TocHeading } from "*.mdx";

import { areSetsEqual } from "@shared/lib";

import { getFlatIds } from "./get-flat-ids";

const TOP_OFFSET = 90;

export interface UseArticleTocOptions {
  headings: TocHeading[];
  contentRef: RefObject<HTMLElement | null>;
  pageKey: string;
}

export interface UseArticleTocReturn {
  activeIds: Set<string>;
  scrollToHeading: (id: string) => void;
}

export function useArticleToc({
  headings,
  contentRef,
  pageKey,
}: UseArticleTocOptions): UseArticleTocReturn {
  const [activeIds, setActiveIds] = useState<Set<string>>(() => new Set());
  const flatIds = useMemo(() => getFlatIds(headings), [headings]);

  const measurementsRef = useRef<
    Array<{ id: string; top: number; bottom: number }>
  >([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (flatIds.length === 0) {
      return;
    }

    const content = contentRef.current;

    if (!content) {
      return;
    }

    const measureDOM = () => {
      const elements = flatIds
        .map((id) => document.getElementById(id))
        .filter((element): element is HTMLElement => element !== null);

      if (elements.length === 0) {
        return;
      }

      const scrollY = window.scrollY;
      const contentRect = content.getBoundingClientRect();
      const contentAbsoluteBottom = contentRect.bottom + scrollY;

      measurementsRef.current = elements.map((current, i) => {
        const next = elements[i + 1];
        const top = current.getBoundingClientRect().top + scrollY;
        const bottom = next
          ? next.getBoundingClientRect().top + scrollY
          : contentAbsoluteBottom;

        return { id: current.id, top, bottom };
      });
      checkActiveSections();
    };

    const scheduleMeasurement = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        requestAnimationFrame(measureDOM);
      }, 100);
    };

    const checkActiveSections = () => {
      if (measurementsRef.current.length === 0) {
        return;
      }

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const viewportTop = scrollY + TOP_OFFSET;
      const viewportBottom = scrollY + viewportHeight;

      const nextActiveIds = new Set<string>();

      for (const { id, top, bottom } of measurementsRef.current) {
        if (top < viewportBottom && bottom > viewportTop) {
          nextActiveIds.add(id);
        }
      }

      setActiveIds((prev) =>
        areSetsEqual(prev, nextActiveIds) ? prev : nextActiveIds,
      );
    };

    const resizeObserver = new ResizeObserver(() => {
      scheduleMeasurement();
    });
    resizeObserver.observe(content);

    const onScroll = () => {
      requestAnimationFrame(checkActiveSections);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", scheduleMeasurement, { passive: true });

    scheduleMeasurement();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", scheduleMeasurement);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [contentRef, flatIds, pageKey]);

  const scrollToHeading = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return {
    activeIds,
    scrollToHeading,
  };
}
