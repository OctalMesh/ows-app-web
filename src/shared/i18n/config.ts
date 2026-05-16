export const DEFAULT_LOCALE = "uk" as const;
export const SUPPORTED_LOCALES = [DEFAULT_LOCALE, "en"] as const;

export const MESSAGE_NAMESPACES = [
  "common",
  "manifest",
  "theme",
  "footer",
] as const satisfies readonly IntlNamespaces[];

export interface LanguageOptionItem {
  code: Locale;
  label: string;
}

const LABELS: Record<Locale, string> = {
  uk: "Українська",
  en: "English",
};

export function getLanguageOptions(): LanguageOptionItem[] {
  return SUPPORTED_LOCALES.map((code) => ({
    code,
    label: LABELS[code] ?? String(code),
  }));
}
