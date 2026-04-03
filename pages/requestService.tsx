// pages/login.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import RequestService from "../app/components/RequestService/RequestService";
import { getPageNamespaces, normalizeLocale } from "../app/utils/i18n";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        normalizeLocale(locale),
        getPageNamespaces("requestService")
      )),
    },
  };
};

export default RequestService;
