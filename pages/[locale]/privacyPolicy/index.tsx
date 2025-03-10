import PrivacyPolicy from "../../../app/components/PrivacyPolicy/PrivacyPolicy";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18nConfig } from "../../../i18n-config";

import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: i18nConfig.locales.map((locale) => ({
      params: { locale },
    })),
    fallback: false, // Ensures only predefined locales are generated
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locale = (params?.locale as string) || i18nConfig.defaultLocale;

  return {
    props: {
      ...(await serverSideTranslations(locale || i18nConfig.defaultLocale, [
        "privacyPolicy",
        "common",
      ])),
    },
  };
};

export default PrivacyPolicy;
