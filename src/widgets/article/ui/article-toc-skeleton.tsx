import type { HTMLAttributes, JSX } from "react";

import { cn } from "@shared/lib/cn";
import { Skeleton } from "@shared/ui/skeleton";

export type ArticleTocSkeletonProps = HTMLAttributes<HTMLElement>;

export function ArticleTocSkeleton({
  className,
}: ArticleTocSkeletonProps): JSX.Element {
  return (
    <div className={cn("w-96 lg:justify-self-end lg:px-8", className)}>
      {/* Mobile skeleton */}
      <div className="fixed top-0 z-50 flex w-full flex-col items-center lg:hidden">
        <div className="h-15 w-full bg-background/50 backdrop-blur-md" />
      </div>

      {/* Desktop skeleton */}
      <nav className="sticky top-0 flex h-dvh flex-col self-start pt-16 max-lg:hidden">
        <Skeleton className="mb-6 h-6 w-32 rounded-md" />
        <div className="flex min-h-0 flex-1 flex-col gap-4 border-l border-border/40 py-2 pl-4">
          <Skeleton className="h-4 w-3/4 rounded-md" />
          <Skeleton className="h-4 w-5/6 rounded-md" />
          <Skeleton className="h-4 w-2/3 rounded-md" />
          <Skeleton className="h-4 w-4/5 rounded-md" />
          <Skeleton className="h-4 w-1/2 rounded-md" />
          <Skeleton className="h-4 w-3/4 rounded-md" />
        </div>
      </nav>
    </div>
  );
}
