import { JSX } from "react";

import { Link } from "@shared/i18n";
import { cn } from "@shared/lib";
import { ArrowIcon } from "@shared/ui";

interface FooterLinkProps {
  href: string;
  label: string;
  external?: boolean;
}

export function FooterLink({
  href,
  label,
  external,
}: FooterLinkProps): JSX.Element {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group line-3 relative flex items-center justify-between py-4"
    >
      <div className="relative h-[1.2em] overflow-hidden text-2xl">
        <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.86,0,0.07,1)] group-hover:-translate-y-1/2">
          <span className="flex h-[1.2em] items-center leading-none text-nowrap text-current/50 transition-colors duration-300 group-hover:text-foreground">
            {label}
          </span>
          <span className="flex h-[1.2em] items-center leading-none text-nowrap text-foreground">
            {label}
          </span>
        </div>
      </div>

      <div className="relative ml-4 h-6 w-6 shrink-0 overflow-hidden sm:h-7 sm:w-7">
        <div
          className={cn(
            "absolute inset-0",
            "transition-transform duration-500 ease-[cubic-bezier(0.86,0,0.07,1)]",
            "group-hover:translate-x-full group-hover:-translate-y-full",
            "text-current/50",
          )}
        >
          <ArrowIcon />
        </div>
        <div
          className={cn(
            "absolute inset-0",
            "-translate-x-full translate-y-full",
            "transition-transform duration-500 ease-[cubic-bezier(0.86,0,0.07,1)]",
            "group-hover:translate-x-0 group-hover:translate-y-0",
          )}
        >
          <ArrowIcon />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-current/10">
        <div
          className={cn(
            "absolute inset-0 h-px origin-left bg-current",
            "scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.86,0,0.07,1)]",
            "group-hover:scale-x-100",
          )}
        />
      </div>
    </Link>
  );
}
