"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LegalLayout({ children }: Props) {
  return (
    <article className="mx-auto prose max-w-4xl px-4 py-16 prose-neutral dark:prose-invert">
      {children}
    </article>
  );
}
