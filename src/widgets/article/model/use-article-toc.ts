"use client";

import {
  type RefObject,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { TocHeading } from "*.mdx";

const TOP_OFFSET = 90;

export interface UseArticleTocOptions {
  headings: TocHeading[];
  contentRef: RefObject<HTMLElement | null>;
  pageKey: string;
}

function getFlatIds(headings: TocHeading[]): string[] {
  const ids: string[] = [];

  for (const item of headings) {
    ids.push(item.id);

    if (item.children.length > 0) {
      ids.push(...getFlatIds(item.children));
    }
  }

  return ids;
}

export function useArticleToc({
  headings,
  contentRef,
  pageKey,
}: UseArticleTocOptions) {
  const [activeIds, setActiveIds] = useState<Set<string>>(() => new Set());
  const flatIds = useMemo(() => getFlatIds(headings), [headings]);

  useEffect(() => {
    if (!flatIds.length) {
      return;
    }

    const content = contentRef.current;

    if (!content) {
      return;
    }

    const elements = flatIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (!elements.length) {
      return;
    }

    const updateActiveSections = () => {
      const activeIds = new Set<string>();
      const viewportHeight = window.innerHeight;
      const contentBottom = content.getBoundingClientRect().bottom;

      for (let i = 0; i < elements.length; i++) {
        const current = elements[i]!;
        const next = elements[i + 1];

        const top = current.getBoundingClientRect().top;
        const bottom = next?.getBoundingClientRect().top ?? contentBottom;

        if (top < viewportHeight && bottom > TOP_OFFSET) {
          activeIds.add(current.id);
        }
      }

      setActiveIds(activeIds);
    };

    const observer = new IntersectionObserver(updateActiveSections);

    for (const element of elements) {
      observer.observe(element);
    }

    updateActiveSections();

    return () => observer.disconnect();
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
