// pages/index.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import ForgotPassword from "../app/components/ForgotPassword/ForgotPassword";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "forgotPassword",

        "common",
      ])),
    },
  };
};

export default ForgotPassword;
