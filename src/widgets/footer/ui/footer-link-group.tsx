import { ReactNode } from "react";

interface FooterLinkGroupProps {
  title: string;
  children: ReactNode;
}

export function FooterLinkGroup({ title, children }: FooterLinkGroupProps) {
  return (
    <div>
      <h2 className="text-md mb-6 font-mono tracking-widest uppercase opacity-30">
        {title}
      </h2>
      <nav className="flex flex-col">{children}</nav>
    </div>
  );
}
