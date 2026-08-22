"use client";

import { JSX } from "react";

import { IconChevronRight } from "@tabler/icons-react";

import { Link } from "@shared/i18n";

import { useNavigation } from "../../model";

export interface NavOverlayMenuLinkProps {
  href: string;
  label: string;
}

export function NavOverlayMenuLink({
  href,
  label,
}: NavOverlayMenuLinkProps): JSX.Element {
  const { closeMenu } = useNavigation();

  return (
    <Link
      href={href}
      onClick={closeMenu}
      className="group flex items-center justify-between rounded-3xl border border-transparent px-8 py-4 transition-all duration-300 hover:bg-muted"
    >
      <span className="text-3xl font-medium tracking-tight sm:text-4xl">
        {label}
      </span>
      <IconChevronRight className="size-6 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
    </Link>
  );
}
