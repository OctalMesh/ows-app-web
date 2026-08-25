"use client";

import { JSX, ReactNode } from "react";

import { Link } from "@shared/i18n";
import { cn } from "@shared/lib/cn";

import { useNavigation } from "../../model";

export interface NavOverlayMenuActionProps {
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
}: NavOverlayMenuActionProps): JSX.Element {
  const { closeMenu } = useNavigation();

  return (
    <Link
      href={href}
      onClick={closeMenu}
      className={cn(
        "flex h-16 items-center justify-start gap-3 rounded-[1.5rem] border border-border px-5 transition-colors hover:bg-muted",
        className,
      )}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}
