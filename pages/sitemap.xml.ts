import type { GetServerSideProps } from "next";
import {
  buildAbsoluteUrl,
  getCanonicalPath,
  getSitemapPathnames,
} from "../app/utils/seo";
import { SUPPORTED_LOCALES } from "../app/utils/i18n";

function buildSitemapXml() {
  const lastModified = new Date().toISOString();
  const urls = getSitemapPathnames()
    .flatMap((pathname) =>
      SUPPORTED_LOCALES.map((locale) => {
        const loc = buildAbsoluteUrl(getCanonicalPath(locale, pathname));
        const alternates = SUPPORTED_LOCALES.map(
          (supportedLocale) =>
            `<xhtml:link rel="alternate" hreflang="${supportedLocale}" href="${buildAbsoluteUrl(
              getCanonicalPath(supportedLocale, pathname)
            )}" />`
        ).join("");

        return `<url><loc>${loc}</loc>${alternates}<xhtml:link rel="alternate" hreflang="x-default" href="${buildAbsoluteUrl(
          getCanonicalPath("en", pathname)
        )}" /><lastmod>${lastModified}</lastmod></url>`;
      })
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.write(buildSitemapXml());
  res.end();

  return {
    props: {},
  };
};

export default function SitemapXml() {
  return null;
}
