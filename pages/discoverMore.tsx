// pages/index.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import DiscoverMore from "../app/components/DiscoverMore/DiscoverMore";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "discoverMore",
        "common",
      ])),
    },
  };
};

export default DiscoverMore;
