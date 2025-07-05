// pages/login.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import OurPower from "../app/components/OurPower/OurPower";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "ourPower",
        "menuComponent",
        "footer",
      ])),
    },
  };
};

export default OurPower;
