"use client";

import { type JSX } from "react";

import { ErrorScreen } from "@widgets/error-screen";

import { Button } from "@shared/ui/button";

interface ServerErrorScreenProps {
  statusCode: number;
  title: string;
  cta: string;
  action: () => void;
}

export function ServerErrorScreen({
  statusCode,
  title,
  cta,
  action,
}: ServerErrorScreenProps): JSX.Element {
  return (
    <ErrorScreen statusCode={statusCode}>
      <ErrorScreen.Canvas>
        <ErrorScreen.Scene />
      </ErrorScreen.Canvas>

      <ErrorScreen.Banner>
        <ErrorScreen.Title>{title}</ErrorScreen.Title>

        <ErrorScreen.Action>
          <Button
            size="lg"
            className="text-md h-auto rounded-full px-8 py-6"
            onClick={action}
          >
            <span>{cta}</span>
          </Button>
        </ErrorScreen.Action>
      </ErrorScreen.Banner>
    </ErrorScreen>
  );
}
