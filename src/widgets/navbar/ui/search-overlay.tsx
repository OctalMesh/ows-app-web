"use client";

import { useMemo, useState } from "react";

import { useTranslations } from "next-intl";
import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

import {
  DesktopOverlayShell,
  SHOP_MENU_LINKS,
  useNavigationStore,
} from "@features/navigation";

export function SearchOverlay() {
  const t = useTranslations("common");
  const [searchQuery, setSearchQuery] = useState("");

  const isSearchOpen = useNavigationStore((state) => state.isSearchOpen);
  const closeSearch = useNavigationStore((state) => state.closeSearch);

  const searchLinks = useMemo(() => SHOP_MENU_LINKS, []);

  const filteredSearchLinks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return searchLinks;
    }

    return searchLinks.filter((link) =>
      t(link.label as never)
        .toLowerCase()
        .includes(query),
    );
  }, [searchLinks, searchQuery, t]);

  return (
    <DesktopOverlayShell open={isSearchOpen} onClose={closeSearch}>
      <div className="flex flex-col gap-6">
        <label className="grid">
          <input
            autoFocus
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder={t("nav.search")}
            className="h-14 rounded-[1.5rem] border border-border/70 bg-background px-6 text-base ring-0 transition-shadow outline-none placeholder:text-muted-foreground focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]"
          />
        </label>

        <div className="grid gap-2">
          {filteredSearchLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeSearch}
              className="flex items-center justify-between rounded-[1.35rem] border border-border/60 px-6 py-3 transition-colors hover:bg-muted"
            >
              <span className="font-medium">{t(link.label as never)}</span>
              <IconArrowRight className="size-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </div>
    </DesktopOverlayShell>
  );
}
