"use client";

import { type RefObject, createContext, useContext } from "react";

export interface ArticleContextValue {
  contentRef: RefObject<HTMLElement | null>;
}

export const ArticleContext = createContext<ArticleContextValue | null>(null);

export function useArticleContext(): ArticleContextValue {
  const context = useContext(ArticleContext);

  if (!context) {
    throw new Error("Article components must be used within <Article>");
  }

  return context;
}
