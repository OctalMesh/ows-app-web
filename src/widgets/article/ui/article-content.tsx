"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@shared/lib";

import { useArticleContext } from "../model/use-article-context";

export type ArticleContentProps = HTMLAttributes<HTMLElement>;

export function ArticleContent({ className, ...props }: ArticleContentProps) {
  const { contentRef } = useArticleContext();

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
