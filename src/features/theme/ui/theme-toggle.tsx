"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";

import { Theme } from "@shared/config";
import { Button } from "@shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@shared/ui/dropdown-menu";

import { ThemeSwitcher } from "./theme-switcher";

export function ThemeToggle() {
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
          {t("system")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(Theme.LIGHT)}>
          <IconSun />
          {t("light")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(Theme.DARK)}>
          <IconMoon />
          {t("dark")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
