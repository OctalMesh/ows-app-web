import { SUPPORTED_LOCALES } from "./config";

interface NamespaceMap {
  common: typeof import("../../../messages/uk/common.json");
  manifest: typeof import("../../../messages/uk/manifest.json");
  theme: typeof import("../../../messages/uk/theme.json");
  footer: typeof import("../../../messages/uk/footer.json");
}

declare global {
  type Locale = (typeof SUPPORTED_LOCALES)[number];
  type IntlMessages = NamespaceMap;
  type IntlNamespaces = keyof NamespaceMap;
}

declare module "next-intl" {
  // Used by next-intl to type check the messages in application
  // noinspection JSUnusedGlobalSymbols
  interface AppConfig {
    Locale: Locale;
    Messages: NamespaceMap;
  }
}
