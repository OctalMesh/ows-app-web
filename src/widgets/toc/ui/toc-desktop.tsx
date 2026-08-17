"use client";

import { useTranslations } from "next-intl";

import { ScrollArea } from "@shared/ui/scroll";

import type { TocHeading } from "../model/heading";
import { TocHeadingList } from "./toc-heading-list";
import { TocTitle } from "./toc-title";

export interface TocDesktopProps {
  headings: TocHeading[];
  activeIds: Set<string>;
  onSelect: (id: string) => void;
}

export function TocDesktop({ headings, activeIds, onSelect }: TocDesktopProps) {
  const t = useTranslations("common.toc");

  return (
    <nav
      aria-label={t("title")}
      className="sticky top-0 flex h-dvh flex-col self-start pt-16 max-lg:hidden"
    >
      <TocTitle />

      <ScrollArea showBar={false} className="min-h-0 flex-1 pl-3">
        <TocHeadingList
          headings={headings}
          activeIds={activeIds}
          onSelect={onSelect}
          className="flex flex-col"
        />
      </ScrollArea>
    </nav>
  );
}
