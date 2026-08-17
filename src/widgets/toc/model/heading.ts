export interface TocHeading {
  id: string;
  text: string;
  level: number;
  children: TocHeading[];
}

export function buildHeadingTree(
  rawHeadings: Array<{
    id: string;
    text: string;
    level: number;
    children?: TocHeading[];
  }>,
): TocHeading[] {
  if (rawHeadings.length === 0) {
    return [];
  }

  const hasChildren = rawHeadings.some((heading) => heading.children?.length);

  if (hasChildren) {
    return rawHeadings as TocHeading[];
  }

  const root: TocHeading[] = [];
  const stack: TocHeading[] = [];

  for (const item of rawHeadings) {
    const node: TocHeading = {
      id: item.id,
      text: item.text,
      level: item.level,
      children: [],
    };

    while (stack.length > 0) {
      const parent = stack[stack.length - 1]!;

      if (parent.level < node.level) {
        parent.children.push(node);
        break;
      }

      stack.pop();
    }

    if (stack.length === 0) {
      root.push(node);
    }

    stack.push(node);
  }

  return root;
}
