// pages/index.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import DiscoverMore from "../app/components/DiscoverMore/DiscoverMore";
import { getPageNamespaces, normalizeLocale } from "../app/utils/i18n";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        normalizeLocale(locale),
        getPageNamespaces("discoverMore")
      )),
    },
  };
};

export default DiscoverMore;
