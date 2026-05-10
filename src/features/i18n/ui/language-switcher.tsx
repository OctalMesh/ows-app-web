"use client";

import * as React from "react";

import { usePathname, useRouter } from "next/navigation";

import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  getLanguageOptions,
} from "@shared/i18n";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@shared/ui/select";

function isLocale(value: string | undefined): value is Locale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function LanguageSwitcher() {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const selectId = React.useId();
  const contentId = `language-select-content-${selectId}`;

  const current = React.useMemo((): Locale => {
    const re = /^\/([a-z]{2})(?:\/|$)/;
    const m = re.exec(pathname);
    return m && isLocale(m[1]) ? m[1] : DEFAULT_LOCALE;
  }, [pathname]);

  const options = getLanguageOptions();

  function handleChange(code: string | null) {
    const newLocale = isLocale(code ?? undefined) ? code! : DEFAULT_LOCALE;
    const base = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");
    const href = `/${newLocale}${base}`;
    router.push(href);
  }

  return (
    <Select
      value={current}
      onValueChange={(value) => handleChange(value ?? null)}
    >
      <SelectTrigger
        size="lg"
        className="rounded-4xl border-border bg-background px-4 py-2 hover:bg-muted dark:bg-transparent dark:hover:bg-input/30"
        aria-label="Change language"
        aria-controls={contentId}
      >
        <SelectValue>
          {(value: string) => {
            const selected = options.find((option) => option.code === value);
            return selected ? selected.code.toUpperCase() : value;
          }}
        </SelectValue>
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
