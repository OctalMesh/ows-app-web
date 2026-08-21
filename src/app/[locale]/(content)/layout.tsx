"use client";

import { type JSX, ReactNode } from "react";

import { DefaultNavigation } from "@widgets/navigation";

interface Props {
  children: ReactNode;
}

export default function ContentLayout({ children }: Props): JSX.Element {
  return (
    <DefaultNavigation showPrimaryNav={false} showBackButton={true}>
      {children}
    </DefaultNavigation>
  );
}
