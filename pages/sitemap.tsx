import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";
import Sitemap from "../app/components/Sitemap/Sitemap";
import { getPageNamespaces, normalizeLocale } from "../app/utils/i18n";

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale;
  return {
    props: {
      ...(await serverSideTranslations(
        normalizeLocale(locale),
        getPageNamespaces("siteMap")
      )),
    },
  };
}

export default Sitemap;
