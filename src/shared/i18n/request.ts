import { IntlErrorCode } from "next-intl";
import { GetRequestConfigParams, getRequestConfig } from "next-intl/server";
import * as rootParams from "next/root-params";

import { DEFAULT_LOCALE, NAMESPACES, isValidLocale } from "./config";

const isDev = process.env.NODE_ENV !== "production";

const rawMessagesCache = new Map<Locale, Promise<IntlMessages>>();

function loadMessages(locale: Locale): Promise<IntlMessages> {
  if (!isDev) {
    const cached = rawMessagesCache.get(locale);

    if (cached) {
      return cached;
    }
  }

  const promise = (async () => {
    const entries = await Promise.all(
      NAMESPACES.map(async (ns: IntlNamespaces) => {
        const mod = (await import(
          `../../../messages/${locale}/${ns}.json`
        )) as {
          default: Record<string, unknown>;
        };
        return [ns, mod.default] as const;
      }),
    );

    return Object.fromEntries(entries) as unknown as IntlMessages;
  })();

  if (!isDev) rawMessagesCache.set(locale, promise);
  return promise;
}

function deepMerge(
  base: Record<string, unknown>,
  override: Record<string, unknown>,
): Record<string, unknown> {
  const result = { ...base };

  for (const key of Object.keys(override)) {
    const baseVal = base[key];
    const overrideVal = override[key];

    if (
      baseVal &&
      overrideVal &&
      typeof baseVal === "object" &&
      typeof overrideVal === "object" &&
      !Array.isArray(baseVal) &&
      !Array.isArray(overrideVal)
    ) {
      result[key] = deepMerge(
        baseVal as Record<string, unknown>,
        overrideVal as Record<string, unknown>,
      );
    } else {
      result[key] = overrideVal;
    }
  }

  return result;
}

const mergedMessagesCache = new Map<Locale, Promise<IntlMessages>>();

function loadMessagesWithFallback(locale: Locale): Promise<IntlMessages> {
  if (!isDev) {
    const cached = mergedMessagesCache.get(locale);

    if (cached) {
      return cached;
    }
  }

  const promise = (async () => {
    const defaultMessages = await loadMessages(DEFAULT_LOCALE);

    if (locale === DEFAULT_LOCALE) {
      return defaultMessages;
    }

    try {
      const localeMessages = await loadMessages(locale);

      return deepMerge(
        defaultMessages as unknown as Record<string, unknown>,
        localeMessages as unknown as Record<string, unknown>,
      ) as unknown as IntlMessages;
    } catch {
      return defaultMessages;
    }
  })();

  if (!isDev) {
    mergedMessagesCache.set(locale, promise);
  }

  return promise;
}

async function resolveLocale({
  locale,
}: GetRequestConfigParams): Promise<Locale> {
  if (isValidLocale(locale)) {
    return locale;
  }

  const paramValue = await rootParams.locale();
  return isValidLocale(paramValue) ? paramValue : DEFAULT_LOCALE;
}

export default getRequestConfig(async (params) => {
  const resolvedLocale = await resolveLocale(params);

  return {
    locale: resolvedLocale,
    messages: await loadMessagesWithFallback(resolvedLocale),
    onError(error): void {
      if (error.code !== IntlErrorCode.MISSING_MESSAGE) {
        console.error(error);
      }
    },
    getMessageFallback({ namespace, key }): string {
      const path = [namespace, key].filter(Boolean).join(".");

      if (isDev) {
        console.warn(
          `[i18n] Missing message: "${path}" for locale "${resolvedLocale}"`,
        );
      }

      return path;
    },
  };
});
