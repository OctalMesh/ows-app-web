import type { TocHeading } from "*.mdx";

export function getFlatIds(
  headings: TocHeading[],
  acc: string[] = [],
): string[] {
  for (const item of headings) {
    acc.push(item.id);

    if (item.children.length > 0) {
      getFlatIds(item.children, acc);
    }
  }

  return acc;
}
