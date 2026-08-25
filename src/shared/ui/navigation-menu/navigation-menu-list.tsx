"use client";

import type { ComponentPropsWithRef, JSX } from "react";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";

import { cn } from "@shared/lib/cn";

export type NavigationMenuListProps = ComponentPropsWithRef<
  typeof NavigationMenuPrimitive.List
>;

export function NavigationMenuList({
  className,
  ...props
}: NavigationMenuListProps): JSX.Element {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-0",
        className,
      )}
      {...props}
    />
  );
}
