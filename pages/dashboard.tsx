// pages/index.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Dashboard from "../app/components/Dashboard/Dashboard";
import { getPageNamespaces, normalizeLocale } from "../app/utils/i18n";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        normalizeLocale(locale),
        getPageNamespaces()
      )),
    },
  };
};

export default Dashboard;
