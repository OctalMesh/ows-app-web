"use client";

import { type JSX, ReactNode } from "react";

import { DefaultNavigation } from "@widgets/navigation";

interface Props {
  children: ReactNode;
}

export default function LandingLayout({ children }: Props): JSX.Element {
  return (
    <DefaultNavigation>
      <div className="flex min-h-svh items-center justify-center px-10">
        {children}
      </div>
    </DefaultNavigation>
  );
}
