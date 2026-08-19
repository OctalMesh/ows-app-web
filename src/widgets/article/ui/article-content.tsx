"use client";

import type { HTMLAttributes, JSX } from "react";

import { cn } from "@shared/lib";

import { useArticle } from "../model/use-article";

export type ArticleContentProps = HTMLAttributes<HTMLElement>;

export function ArticleContent({
  className,
  ...props
}: ArticleContentProps): JSX.Element {
  const { contentRef } = useArticle();

  return (
    <article
      ref={contentRef}
      className={cn(
        "prose max-w-full px-5 py-16 prose-neutral lg:px-10 dark:prose-invert",
        className,
      )}
      {...props}
    />
  );
}
