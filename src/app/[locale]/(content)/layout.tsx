"use client";

import { type JSX } from "react";

import { DefaultNavigation } from "@widgets/navigation";

type ContentLayoutProps = LayoutProps<"/[locale]">;

export default function ContentLayout({
  children,
}: ContentLayoutProps): JSX.Element {
  return (
    <DefaultNavigation showPrimaryNav={false} showBackButton={true}>
      {children}
    </DefaultNavigation>
  );
}
