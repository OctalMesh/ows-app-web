"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@shared/lib";

export type BreadcrumbLinkProps = useRender.ComponentProps<"a">;

export function BreadcrumbLink({
  className,
  render,
  ...props
}: BreadcrumbLinkProps): ReturnType<typeof useRender> {
  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">(
      {
        className: cn("transition-colors hover:text-foreground", className),
      },
      props,
    ),
    render,
    state: {
      slot: "breadcrumb-link",
    },
  });
}
