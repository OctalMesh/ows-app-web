/*
NOTE: Real shit code. This is a temporary solution to get static error
messages for the root error page.
*/
import { DEFAULT_LOCALE } from "@shared/i18n";

import enErrors from "../../../../messages/en/errors.json";
import ukErrors from "../../../../messages/uk/errors.json";
import { type ErrorMessage, resolveErrorKey } from "./resolve-error-key";

const LOCALE_COOKIE_NAME = "NEXT_LOCALE";
const STATIC_ERROR_MESSAGES: Record<Locale, Record<string, ErrorMessage>> = {
  en: enErrors,
  uk: ukErrors,
};

function readLocaleCookie(): Locale | null {
  if (typeof document === "undefined") {
    return null;
  }

  const match = document.cookie.match(
    new RegExp(`(?:^|; )${LOCALE_COOKIE_NAME}=([^;]*)`),
  );
  const first = match ? match[1] : null;

  if (!first) {
    return null;
  }

  const value = match ? decodeURIComponent(first) : null;

  return value && value in STATIC_ERROR_MESSAGES ? (value as Locale) : null;
}

export function getStaticLocale(): Locale {
  return readLocaleCookie() ?? DEFAULT_LOCALE;
}

export function getStaticErrorMsg(
  statusCode: number,
  locale: Locale = getStaticLocale(),
): ErrorMessage {
  const key = resolveErrorKey(statusCode);
  const messages =
    STATIC_ERROR_MESSAGES[locale] ?? STATIC_ERROR_MESSAGES[DEFAULT_LOCALE];

  return messages[key] ?? messages.default!;
}
