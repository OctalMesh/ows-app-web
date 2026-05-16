import { IntlErrorCode } from "next-intl";
import { GetRequestConfigParams, getRequestConfig } from "next-intl/server";

import {
  DEFAULT_LOCALE,
  MESSAGE_NAMESPACES,
  SUPPORTED_LOCALES,
} from "./config";

function isValidLocale(value: string | undefined): value is Locale {
  return !!value && SUPPORTED_LOCALES.includes(value as Locale);
}

async function loadMessages(locale: string): Promise<IntlMessages> {
  const entries = await Promise.all(
    MESSAGE_NAMESPACES.map(async (ns) => {
      const mod = (await import(`../../../messages/${locale}/${ns}.json`)) as {
        default: Record<string, unknown>;
      };
      return [ns, mod.default] as const;
    }),
  );

  return Object.fromEntries(entries) as unknown as IntlMessages;
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

async function loadMessagesWithFallback(locale: string): Promise<IntlMessages> {
  const defaultMessages = await loadMessages(DEFAULT_LOCALE);

  if (locale === DEFAULT_LOCALE) return defaultMessages;

  try {
    const localeMessages = await loadMessages(locale);

    return deepMerge(
      defaultMessages as unknown as Record<string, unknown>,
      localeMessages as unknown as Record<string, unknown>,
    ) as unknown as IntlMessages;
  } catch {
    return defaultMessages;
  }
}

export default getRequestConfig(
  async ({ locale, requestLocale }: GetRequestConfigParams) => {
    let resolvedLocale: Locale;

    if (isValidLocale(locale)) {
      resolvedLocale = locale;
    } else {
      const requested = await requestLocale;
      resolvedLocale = isValidLocale(requested) ? requested : DEFAULT_LOCALE;
    }

    return {
      locale: resolvedLocale,
      messages: await loadMessagesWithFallback(resolvedLocale),
      onError(error) {
        if (error.code !== IntlErrorCode.MISSING_MESSAGE) {
          console.error(error);
        }
      },
      getMessageFallback({ namespace, key }) {
        const path = [namespace, key].filter(Boolean).join(".");

        if (process.env.NODE_ENV === "development") {
          console.warn(
            `[i18n] Missing message: "${path}" for locale "${resolvedLocale}"`,
          );
        }

        return path;
      },
    };
  },
);
