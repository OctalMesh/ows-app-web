import { JSX } from "react";

import { ArticleContent } from "./article-content";
import { ArticleShell, ArticleShellProps } from "./article-shell";
import { ArticleToc } from "./article-toc";

export interface ArticleComponent {
  (props: ArticleShellProps): JSX.Element;
  Content: typeof ArticleContent;
  Toc: typeof ArticleToc;
}

export const Article: ArticleComponent = Object.assign(ArticleShell, {
  Content: ArticleContent,
  Toc: ArticleToc,
});
