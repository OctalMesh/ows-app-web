"use client";

import { createContext, useContext } from "react";
import type { RefObject } from "react";

export interface ArticleContextValue {
  contentRef: RefObject<HTMLElement | null>;
}

export const ArticleContext = createContext<ArticleContextValue | null>(null);

export function useArticle(): ArticleContextValue {
  const context = useContext(ArticleContext);

  if (!context) {
    throw new Error("Article components must be used within <Article>");
  }

  return context;
}
