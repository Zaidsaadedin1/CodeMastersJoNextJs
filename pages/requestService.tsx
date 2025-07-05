// pages/login.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import RequestService from "../app/components/RequestService/RequestService";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "requestService",
        "menuComponent",
        "footer",
      ])),
    },
  };
};

export default RequestService;
