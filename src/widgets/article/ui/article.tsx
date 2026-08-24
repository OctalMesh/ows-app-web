import { JSX } from "react";

import { ArticleContent } from "./article-content";
import { ArticleContentSkeleton } from "./article-content-skeleton";
import { ArticleShell, ArticleShellProps } from "./article-shell";
import { ArticleToc } from "./article-toc";
import { ArticleTocSkeleton } from "./article-toc-skeleton";

export interface ArticleComponent {
  (props: ArticleShellProps): JSX.Element;
  Content: typeof ArticleContent;
  ContentSkeleton: typeof ArticleContentSkeleton;
  Toc: typeof ArticleToc;
  TocSkeleton: typeof ArticleTocSkeleton;
}

export const Article: ArticleComponent = Object.assign(ArticleShell, {
  Content: ArticleContent,
  ContentSkeleton: ArticleContentSkeleton,
  Toc: ArticleToc,
  TocSkeleton: ArticleTocSkeleton,
});
