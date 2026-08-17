"use client";

import { useState } from "react";

import { IconChevronRight } from "@tabler/icons-react";

import { cn } from "@shared/lib";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@shared/ui/collapsible";

import type { TocHeading } from "../model/heading";
import { TocItem } from "./toc-item";

export interface TocSectionProps {
  heading: TocHeading;
  activeIds: Set<string>;
  onSelect: (id: string) => void;
}

export function TocSection({ heading, activeIds, onSelect }: TocSectionProps) {
  const [open, setOpen] = useState(true);
  const isActive = activeIds.has(heading.id);

  if (!heading.children || heading.children.length === 0) {
    return (
      <TocItem heading={heading} isActive={isActive} onSelect={onSelect} />
    );
  }

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex items-center gap-0.5">
        <TocItem
          heading={heading}
          isActive={isActive}
          onSelect={onSelect}
          className="flex-1"
        />
        <CollapsibleTrigger
          aria-label={open ? "Collapse section" : "Expand section"}
          className="shrink-0 cursor-pointer rounded-md p-1.5 text-muted-foreground transition-colors duration-200 hover:bg-foreground/5 hover:text-foreground"
        >
          <IconChevronRight
            className={cn(
              "size-3.5 transition-transform duration-200",
              open && "rotate-90",
            )}
          />
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="flex flex-col overflow-hidden py-1.5">
        {heading.children.map((child) =>
          child.children && child.children.length > 0 ? (
            <TocSection
              key={child.id}
              heading={child}
              activeIds={activeIds}
              onSelect={onSelect}
            />
          ) : (
            <TocItem
              key={child.id}
              heading={child}
              isActive={activeIds.has(child.id)}
              onSelect={onSelect}
            />
          ),
        )}
      </CollapsibleContent>
    </Collapsible>
  );
}
