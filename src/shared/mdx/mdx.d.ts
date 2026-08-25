declare module "*.mdx" {
  import type { ComponentType } from "react";

  export interface FlatHeading {
    id: string;
    text: string;
    level: number;
  }

  export interface TocHeading extends FlatHeading {
    children: TocHeading[];
  }

  export const tableOfContents: TocHeading[];

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
