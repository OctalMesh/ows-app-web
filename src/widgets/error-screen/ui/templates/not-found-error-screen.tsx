"use client";

import { type JSX } from "react";

import Link from "next/link";

import { IconArrowUpRight } from "@tabler/icons-react";

import { ErrorScreen } from "@widgets/error-screen";

import { Button } from "@shared/ui/button";

export const NOT_FOUND_STATUS_CODE = 404;

interface NotFoundErrorScreenProps {
  title: string;
  cta: string;
}

export function NotFoundErrorScreen({
  title,
  cta,
}: NotFoundErrorScreenProps): JSX.Element {
  return (
    <ErrorScreen statusCode={NOT_FOUND_STATUS_CODE}>
      <ErrorScreen.Canvas>
        <ErrorScreen.Scene />
      </ErrorScreen.Canvas>

      <ErrorScreen.Banner>
        <ErrorScreen.Title>{title}</ErrorScreen.Title>

        <ErrorScreen.Action>
          <Link href="/" aria-label={"Go to home page"}>
            <Button
              size="lg"
              className="group text-md h-auto gap-3 rounded-full px-8 py-6"
            >
              <IconArrowUpRight className="size-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              <span>{cta}</span>
            </Button>
          </Link>
        </ErrorScreen.Action>
      </ErrorScreen.Banner>
    </ErrorScreen>
  );
}
