import { ArticleContent } from "./article-content";
import { ArticleShell } from "./article-shell";
import { ArticleToc } from "./article-toc";

export const Article = Object.assign(ArticleShell, {
  Content: ArticleContent,
  Toc: ArticleToc,
});
