"use client";

import type { ComponentPropsWithRef, JSX } from "react";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";

import { cn } from "@shared/lib/cn";

export type NavigationMenuItemProps = ComponentPropsWithRef<
  typeof NavigationMenuPrimitive.Item
>;

export function NavigationMenuItem({
  className,
  ...props
}: NavigationMenuItemProps): JSX.Element {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}
