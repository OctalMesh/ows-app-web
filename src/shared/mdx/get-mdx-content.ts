import { DEFAULT_LOCALE } from "@shared/i18n";

import { importMdx } from "./import-mdx";
import { MdxModule } from "./mdx-module";

export async function getMdxContent(
  collection: string,
  slug: string,
  locale: Locale = DEFAULT_LOCALE,
): Promise<MdxModule | null> {
  return importMdx(`${collection}/${slug}`, locale);
}
