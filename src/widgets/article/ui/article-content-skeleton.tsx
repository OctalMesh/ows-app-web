import type { HTMLAttributes, JSX } from "react";

import { cn } from "@shared/lib/cn";
import { Skeleton } from "@shared/ui/skeleton";

export type ArticleContentSkeletonProps = HTMLAttributes<HTMLElement>;

export function ArticleContentSkeleton({
  className,
  ...props
}: ArticleContentSkeletonProps): JSX.Element {
  return (
    <article
      className={cn(
        "prose max-w-full px-5 py-16 prose-neutral lg:px-10 dark:prose-invert",
        className,
      )}
      {...props}
    >
      {/* Header */}
      <Skeleton className="mb-4 h-10 w-3/4 max-w-150 rounded-xl" />
      <Skeleton className="mb-10 h-4 w-48 rounded-md" />

      {/* Intro Section */}
      <div className="mb-12 space-y-3">
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-[95%] rounded-md" />
        <Skeleton className="h-4 w-[85%] rounded-md" />
      </div>

      {/* Section 1 */}
      <Skeleton className="mt-10 mb-6 h-8 w-1/3 rounded-lg" />
      <div className="mb-12 space-y-3">
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-[90%] rounded-md" />
        <Skeleton className="h-4 w-[80%] rounded-md" />
      </div>

      {/* Section 2 */}
      <Skeleton className="mt-10 mb-6 h-8 w-2/5 rounded-lg" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-[85%] rounded-md" />
      </div>
    </article>
  );
}
