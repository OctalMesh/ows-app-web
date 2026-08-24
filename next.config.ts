import path from "node:path";

import nextMDX from "@next/mdx";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/**
 * Next.js configuration
 *
 * @see {@link https://nextjs.org/docs/api-reference/next.config.js/introduction
 *      Next.js documentation}
 */
const configNext: NextConfig = {
  reactStrictMode: true,
  output: "standalone", // https://nextjs.org/docs/getting-started/deploying
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    instantInsights: {
      validationLevel: "manual-warning",
    },
  },

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
        destination: "https://telegram.me/octalmesh",
        permanent: false,
      },
      {
        source: "/manager",
        destination: "https://telegram.me/octalmesh_manager",
        permanent: false,
      },
      {
        source: "/telegram_manager",
        destination: "https://telegram.me/octalmesh_manager",
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
        destination: "https://reddit.com/r/OctalMesh/",
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

/**
 * Internationalization plugin configuration
 *
 * @see {@link https://next-intl.dev/docs/getting-started/app-router#next-config
 *      next-intl plugin documentation}
 */
const withNextIntl = createNextIntlPlugin("./src/shared/i18n/request.ts");

/**
 * MDX plugin configuration
 *
 * @see {@link https://mdxjs.com About MDX}
 * @see {@link https://nextjs.org/docs/app/guides/mdx Next.js MDX guide}
 */
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "metadata" }],
    ],
    rehypePlugins: [
      "rehype-slug",
      path.resolve(process.cwd(), "src/shared/lib/rehype-toc.mts"),
    ],
  },
});

const configWithIntl: NextConfig = withNextIntl(configNext);
const configWithMDX: NextConfig = withMDX(configWithIntl);

export default configWithMDX;
