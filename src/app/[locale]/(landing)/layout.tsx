"use client";

import { type JSX } from "react";

import { DefaultNavigation } from "@widgets/navigation";

type LandingLayoutProps = LayoutProps<"/[locale]">;

export default function LandingLayout({
  children,
}: LandingLayoutProps): JSX.Element {
  return (
    <DefaultNavigation>
      <div className="flex min-h-svh items-center justify-center px-10">
        {children}
      </div>
    </DefaultNavigation>
  );
}
