import TermsOfService from "../../../app/components/TermsOfService/TermsOfService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths, GetStaticProps } from "next";
import { i18nConfig } from "../../../i18n-config";
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: i18nConfig.locales.map((locale) => ({
      params: { locale },
    })),
    fallback: false, // Ensures only predefined locales are generated
  };
};
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || i18nConfig.defaultLocale, [
      "termsOfService",
      "menuComponent",
      "footer",
    ])),
  },
});

export default TermsOfService;
