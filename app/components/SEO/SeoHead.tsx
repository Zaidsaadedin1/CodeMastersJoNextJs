import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  getPageSeo,
} from "../../utils/seo";

type StructuredData = Record<string, unknown>;

type SeoHeadProps = {
  readonly pathname?: string;
  readonly structuredData?: StructuredData[];
};

export default function SeoHead({
  pathname,
  structuredData = [],
}: SeoHeadProps) {
  const router = useRouter();
  const seo = getPageSeo(pathname ?? router.pathname, router.locale);
  const ogLocale = seo.locale === "ar" ? "ar_JO" : "en_US";
  const alternateOgLocale = seo.locale === "ar" ? "en_US" : "ar_JO";

  return (
    <Head>
      <title key="title">{seo.title}</title>
      <meta key="description" name="description" content={seo.description} />
      <meta key="robots" name="robots" content={seo.robots} />

      <link key="canonical" rel="canonical" href={seo.canonicalUrl} />
      <link
        key="alternate-en"
        rel="alternate"
        hrefLang="en"
        href={seo.alternateUrls.en}
      />
      <link
        key="alternate-ar"
        rel="alternate"
        hrefLang="ar"
        href={seo.alternateUrls.ar}
      />
      <link
        key="alternate-default"
        rel="alternate"
        hrefLang="x-default"
        href={seo.xDefaultUrl}
      />

      <meta key="og:type" property="og:type" content={seo.ogType} />
      <meta key="og:title" property="og:title" content={seo.title} />
      <meta
        key="og:description"
        property="og:description"
        content={seo.description}
      />
      <meta key="og:url" property="og:url" content={seo.canonicalUrl} />
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:image" property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta
        key="og:image:alt"
        property="og:image:alt"
        content={SITE_NAME}
      />
      <meta key="og:locale" property="og:locale" content={ogLocale} />
      <meta
        key="og:locale:alternate"
        property="og:locale:alternate"
        content={alternateOgLocale}
      />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:title" name="twitter:title" content={seo.title} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={seo.description}
      />
      <meta
        key="twitter:image"
        name="twitter:image"
        content={DEFAULT_OG_IMAGE}
      />

      {structuredData.map((entry, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(entry),
          }}
        />
      ))}
    </Head>
  );
}
