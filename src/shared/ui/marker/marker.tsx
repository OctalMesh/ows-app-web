"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@shared/lib/cn";

import { type MarkerVariantsProps, markerVariants } from "./marker.styles";

export type MarkerProps = useRender.ComponentProps<"div"> & MarkerVariantsProps;

export function Marker({
  className,
  variant = "default",
  render,
  ...props
}: MarkerProps): ReturnType<typeof useRender> {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(markerVariants({ variant, className })),
      },
      props,
    ),
    render,
    state: {
      slot: "marker",
      variant,
    },
  });
}
