import { useEffect, useState } from "react";

import { TocHeading, buildHeadingTree } from "./heading";

export interface TocOptions {
  contentId: string;
  pageKey: string;
  selectors?: string;
}

export function useToc({
  contentId,
  pageKey,
  selectors = "h2, h3",
}: TocOptions) {
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeIds, setActiveIds] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    const container = document.getElementById(contentId);

    if (!container) {
      return;
    }

    const elements = Array.from(
      container.querySelectorAll<HTMLElement>(selectors),
    );

    const parsedHeadings = buildHeadingTree(
      elements.map((element): TocHeading => ({
        id: element.id,
        text: element.textContent ?? "",
        level: Number(element.tagName.substring(1)),
        children: [],
      })),
    );
    const frameId = requestAnimationFrame(() => setHeadings(parsedHeadings));

    const visibleIds = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            visibleIds.add(element.id);
          } else {
            visibleIds.delete(element.id);
          }
        }

        setActiveIds(new Set(visibleIds));
      },
      {
        threshold: 0,
      },
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [contentId, pageKey, selectors]);

  const scrollToHeading = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    headings,
    activeIds,
    scrollToHeading,
  };
}
