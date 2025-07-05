import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";
import Sitemap from "../app/components/Sitemap/Sitemap";

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale;
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common", "siteMap"])),
    },
  };
}

export default Sitemap;
