import { ukMessages } from "./";
import { SUPPORTED_LOCALES } from "./config";

type Messages = typeof ukMessages;

declare global {
  type Locale = (typeof SUPPORTED_LOCALES)[number];
  type IntlMessages = Messages;
}

declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
  }
}
