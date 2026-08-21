export const DEFAULT_LOCALE = "uk" as const;
export const SUPPORTED_LOCALES = [DEFAULT_LOCALE, "en"] as const;
export const NAMESPACES = [
  "common",
  "errors",
  "manifest",
  "theme",
  "footer",
] as const;

export function isValidLocale(value: string | undefined): value is Locale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}
