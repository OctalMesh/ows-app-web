import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

import nextMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  //<editor-fold desc="Redirects" defaultstate="collapsed">

  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/OctalMesh/",
        permanent: false,
      },
      {
        source: "/telegram",
        destination: "https://t.me/octalmesh",
        permanent: false,
      },
      {
        source: "/manager",
        destination: "https://t.me/octalmesh_manager",
        permanent: false,
      },
      {
        source: "/telegram_manager",
        destination: "https://t.me/octalmesh_manager",
        permanent: false,
      },
      {
        source: "/youtube",
        destination: "https://youtube.com/@octalmesh",
        permanent: false,
      },
      {
        source: "/twitch",
        destination: "https://twitch.tv/octalmesh",
        permanent: false,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/octalmesh",
        permanent: false,
      },
      {
        source: "/tiktok",
        destination: "https://tiktok.com/@octalmesh",
        permanent: false,
      },
      {
        source: "/x",
        destination: "https://x.com/octalmesh",
        permanent: false,
      },
      {
        source: "/reddit",
        destination: "https://reddit.com/r/octalmesh/",
        permanent: false,
      },
      {
        source: "/linkedin",
        destination: "https://linkedin.com/company/octalmesh",
        permanent: false,
      },
      {
        source: "/patreon",
        destination: "https://patreon.com/c/octalmesh",
        permanent: false,
      },
      {
        source: "/crowdin",
        destination: "https://crowdin.com/project/octalweb",
        permanent: false,
      },
    ];
  },

  //</editor-fold>
};

const withNextIntl = createNextIntlPlugin("./src/shared/i18n/request.ts");
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "metadata" }],
    ],
  },
});

const configWithIntl = withNextIntl(nextConfig);
const finalConfig = withMDX(configWithIntl);

export default finalConfig;
