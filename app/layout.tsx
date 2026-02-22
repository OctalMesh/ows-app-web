import type { Metadata } from "next";
import "./styles/globals.css";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://octalmesh.com"),
  title: { default: "OctalMesh", template: "%s | OctalMesh" },
  description: "Engineering studio specializing in 3D printing and additive manufacturing",
  openGraph: {
    title: "OctalMesh",
    description: "Engineering studio specializing in 3D printing and additive manufacturing",
    url: "https://octalmesh.com",
    siteName: "OctalMesh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
