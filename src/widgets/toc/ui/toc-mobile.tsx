"use client";

import { useState } from "react";

import { ScrollArea } from "@shared/ui";
import { Collapsible, CollapsibleContent } from "@shared/ui/collapsible";

import type { TocHeading } from "../model/heading";
import { TocHeadingList } from "./toc-heading-list";
import { TocMobileTrigger } from "./toc-mobile-trigger";
import { TocTitle } from "./toc-title";

export interface TocMobileProps {
  headings: TocHeading[];
  activeIds: Set<string>;
  onSelect: (id: string) => void;
}

export function TocMobile({ headings, activeIds, onSelect }: TocMobileProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 z-50 block w-full lg:hidden">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleContent className="w-screen border-b bg-background px-5 pt-8 sm:pt-16">
          <TocTitle />

          <ScrollArea showBar={false} className="min-h-0 flex-1 px-3">
            <TocHeadingList
              headings={headings}
              activeIds={activeIds}
              onSelect={(id) => {
                onSelect(id);
                setOpen(false);
              }}
              className="max-h-[50vh] flex-col"
            />
          </ScrollArea>
        </CollapsibleContent>
      </Collapsible>

      <div className="relative flex w-full flex-col items-center">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-15 backdrop-blur-md"
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />

        <TocMobileTrigger
          className="relative z-20 mt-3"
          open={open}
          onClick={() => setOpen((v) => !v)}
        />
      </div>
    </div>
  );
}
