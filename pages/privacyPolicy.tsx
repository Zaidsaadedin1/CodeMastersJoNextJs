// pages/login.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import PrivacyPolicy from "../app/components/PrivacyPolicy/PrivacyPolicy";
import { getPageNamespaces, normalizeLocale } from "../app/utils/i18n";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        normalizeLocale(locale),
        getPageNamespaces("privacyPolicy")
      )),
    },
  };
};

export default PrivacyPolicy;
