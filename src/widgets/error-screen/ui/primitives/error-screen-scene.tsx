"use client";

import { useSyncExternalStore } from "react";
import type { JSX } from "react";

import { ERROR_SCENES } from "./scenes";

const noop = () => () => {};

export function ErrorScreenScene(): JSX.Element | null {
  const index = useSyncExternalStore(
    noop,
    () =>
      ERROR_SCENES.length
        ? Math.floor(Math.random() * ERROR_SCENES.length)
        : null,
    () => null,
  );
  const Scene = index !== null ? ERROR_SCENES[index] : null;

  return Scene ? <Scene /> : null;
}
