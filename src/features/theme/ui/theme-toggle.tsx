"use client";

import type { JSX } from "react";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";

import { Theme } from "@shared/config/theme";
import { Button } from "@shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@shared/ui/dropdown-menu";

import { ThemeSwitcher } from "./theme-switcher";

export function ThemeToggle(): JSX.Element {
  const { setTheme } = useTheme();
  const t = useTranslations("theme");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="icon" />}>
        <ThemeSwitcher
          light={<IconSun />}
          dark={<IconMoon />}
          system={<IconDeviceDesktop />}
          fallback={<IconDeviceDesktop />}
        />
        <span className="sr-only">{t("toggle")}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme(Theme.SYSTEM)}>
          <IconDeviceDesktop />
          {t("mode.system")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(Theme.LIGHT)}>
          <IconSun />
          {t("mode.light")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(Theme.DARK)}>
          <IconMoon />
          {t("mode.dark")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
