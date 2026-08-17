"use client";

import { ReactNode } from "react";

import { Toc } from "@widgets/toc";

const LEGAL_CONTENT_ID = "legal-content" as const;

interface Props {
  children: ReactNode;
}

export default function LegalLayout({ children }: Props) {
  return (
    <div className="grid grid-cols-1 divide-x lg:grid-cols-[1fr_3fr] xl:grid-cols-[1fr_2fr_1fr]">
      <Toc
        className="w-96 lg:justify-self-end lg:px-8"
        contentId={LEGAL_CONTENT_ID}
      />

      <article
        id={LEGAL_CONTENT_ID}
        className="prose max-w-full px-10 py-16 prose-neutral dark:prose-invert"
      >
        {children}
      </article>

      <div aria-hidden className="hidden lg:block" />
    </div>
  );
}
