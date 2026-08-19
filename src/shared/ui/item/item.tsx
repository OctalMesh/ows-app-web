"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@shared/lib";

import { type ItemVariantsProps, itemVariants } from "./item.styles";

export type ItemProps = useRender.ComponentProps<"div"> & ItemVariantsProps;

export function Item({
  className,
  variant = "default",
  size = "default",
  render,
  ...props
}: ItemProps): ReturnType<typeof useRender> {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(itemVariants({ variant, size, className })),
      },
      props,
    ),
    render,
    state: {
      slot: "item",
      variant,
      size,
    },
  });
}
