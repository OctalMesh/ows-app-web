"use client";

import type { ReactNode } from "react";

import Link from "next/link";

import { cn } from "@shared/lib";

import { useNavigation } from "../model";

interface NavOverlayMenuActionProps {
  href: string;
  icon: ReactNode;
  label: string;
  className?: string;
}

export function NavOverlayMenuAction({
  href,
  icon,
  label,
  className,
}: NavOverlayMenuActionProps) {
  const { closeMenu } = useNavigation();

  return (
    <Link
      href={href}
      onClick={closeMenu}
      className={cn(
        "flex h-16 items-center justify-start gap-3 rounded-[1.5rem] border border-border/60 px-5 transition-colors hover:bg-muted",
        className,
      )}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}
