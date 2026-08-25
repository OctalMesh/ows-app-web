"use client";

import type { JSX } from "react";

import { useTranslations } from "next-intl";

import { IconAlignLeft } from "@tabler/icons-react";

import { cn } from "@shared/lib/cn";

export interface TocTitleProps {
  text?: string;
  className?: string;
}

export function ArticleTocTitle({
  text,
  className,
}: TocTitleProps): JSX.Element {
  const t = useTranslations("common.toc");

  return (
    <span
      className={cn(
        "inline-flex items-center py-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase",
        className,
      )}
    >
      <IconAlignLeft className="mr-3 ml-1 size-4" />
      {text || t("on_page")}
    </span>
  );
}
