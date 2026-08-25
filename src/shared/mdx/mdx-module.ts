import { TocHeading } from "*.mdx";
import { MDXContent } from "mdx/types";

export interface MdxModule {
  default: MDXContent;
  metadata?: unknown;
  tableOfContents?: TocHeading[];
}
