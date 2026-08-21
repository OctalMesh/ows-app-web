"use client";

import { useTranslations } from "next-intl";

import { type ErrorMessage, resolveErrorKey } from "./resolve-error-key";

export function useErrorMsg(statusCode: number): ErrorMessage {
  const t = useTranslations("errors");
  const key = resolveErrorKey(statusCode);

  return {
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    cta: t(`${key}.cta`),
  };
}
