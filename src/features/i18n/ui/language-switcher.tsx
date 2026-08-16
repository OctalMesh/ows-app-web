"use client";

import * as React from "react";
import { useTransition } from "react";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";

import { SelectRootChangeEventDetails } from "@base-ui/react";
import { IconLanguage } from "@tabler/icons-react";

import { SUPPORTED_LOCALES, usePathname, useRouter } from "@shared/i18n";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@shared/ui/select";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("common.languages");
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const selectId = React.useId();
  const contentId = `language-select-content-${selectId}`;
  const [isPending, startTransition] = useTransition();

  const options = React.useMemo(() => {
    return SUPPORTED_LOCALES.map((code) => ({
      code,
      label: t(code),
    }));
  }, [t]);

  function handleChange(
    newLocale: Locale | null,
    _eventDetails: SelectRootChangeEventDetails,
  ) {
    if (!newLocale || newLocale === locale) {
      return;
    }

    const searchParams = { ...params };
    delete searchParams.locale;

    startTransition(() => {
      router.replace(
        { pathname, query: searchParams },
        { locale: newLocale, scroll: false },
      );
    });
  }

  return (
    <Select value={locale} onValueChange={handleChange} disabled={isPending}>
      <SelectTrigger
        size="lg"
        className="rounded-4xl border-border bg-background px-4 py-2 hover:bg-muted dark:hover:bg-input/30"
        aria-label="Change language"
        aria-controls={contentId}
      >
        <IconLanguage />
        <SelectValue>{(value: string) => value.toUpperCase()}</SelectValue>
      </SelectTrigger>

      <SelectContent id={contentId} className="max-h-72">
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {options.map((option) => (
            <SelectItem
              key={option.code}
              value={option.code}
              title={option.label}
            >
              <span className="flex flex-col gap-0.5">
                <span>{option.label}</span>
                <span className="text-xs text-muted-foreground">
                  {option.code.toUpperCase()}
                </span>
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
