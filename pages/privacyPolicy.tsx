// pages/login.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import PrivacyPolicy from "../app/components/PrivacyPolicy/PrivacyPolicy";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "privacyPolicy",
        "menuComponent",
        "footer",
      ])),
    },
  };
};

export default PrivacyPolicy;
