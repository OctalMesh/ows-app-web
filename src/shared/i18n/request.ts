import { getRequestConfig } from "next-intl/server";

import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "./config";

function isValidLocale(value: string | undefined): value is Locale {
  return !!value && SUPPORTED_LOCALES.includes(value as Locale);
}

export async function loadMessages(locale: string): Promise<IntlMessages> {
  const mod = (await import(`../../../messages/${locale}.json`)) as {
    default: IntlMessages;
  };

  return mod.default;
}

export default getRequestConfig(async ({ locale, requestLocale }) => {
  let resolvedLocale: Locale;

  if (isValidLocale(locale)) {
    resolvedLocale = locale;
  } else {
    const requested = await requestLocale;
    resolvedLocale = isValidLocale(requested) ? requested : DEFAULT_LOCALE;
  }

  let messages: IntlMessages;
  try {
    messages = await loadMessages(resolvedLocale);
  } catch {
    messages = await loadMessages(DEFAULT_LOCALE);
  }

  return { locale: resolvedLocale, messages };
});
