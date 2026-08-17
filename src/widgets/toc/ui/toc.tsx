"use client";

import { usePathname } from "next/navigation";

import { useToc } from "../model/use-toc";
import { TocDesktop } from "./toc-desktop";
import { TocMobile } from "./toc-mobile";

export interface TocProps {
  contentId: string;
  selectors?: string;
  className?: string;
}

export function Toc({ contentId, selectors, className }: TocProps) {
  const pathname = usePathname();
  const { headings, activeIds, scrollToHeading } = useToc({
    contentId,
    pageKey: pathname,
    selectors,
  });

  return (
    <div className={className}>
      <TocMobile
        headings={headings}
        activeIds={activeIds}
        onSelect={scrollToHeading}
      />

      <TocDesktop
        headings={headings}
        activeIds={activeIds}
        onSelect={scrollToHeading}
      />
    </div>
  );
}
