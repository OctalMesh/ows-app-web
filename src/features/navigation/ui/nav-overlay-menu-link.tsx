"use client";

import Link from "next/link";

import { IconChevronRight } from "@tabler/icons-react";

import { useNavigation } from "../model";

interface NavOverlayMenuLinkProps {
  href: string;
  label: string;
}

export function NavOverlayMenuLink({ href, label }: NavOverlayMenuLinkProps) {
  const { closeMenu } = useNavigation();

  return (
    <Link
      href={href}
      onClick={closeMenu}
      className="group flex items-center justify-between rounded-3xl border border-transparent px-8 py-4 transition-all duration-300 hover:border-border/60 hover:bg-muted"
    >
      <span className="text-3xl font-medium tracking-tight sm:text-4xl">
        {label}
      </span>
      <IconChevronRight className="size-6 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
    </Link>
  );
}
