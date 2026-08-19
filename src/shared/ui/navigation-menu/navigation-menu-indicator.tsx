"use client";

import type { ComponentPropsWithRef, JSX } from "react";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";

import { cn } from "@shared/lib";

export type NavigationMenuIndicatorProps = ComponentPropsWithRef<
  typeof NavigationMenuPrimitive.Icon
>;

export function NavigationMenuIndicator({
  className,
  ...props
}: NavigationMenuIndicatorProps): JSX.Element {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-indicator"
      className={cn(
        "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
        className,
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Icon>
  );
}
