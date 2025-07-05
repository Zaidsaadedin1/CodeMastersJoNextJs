import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { GetStaticPropsContext } from "next";
import TermsOfService from "../app/components/TermsOfService/TermsOfService";

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale;
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "termsOfService",
      ])),
    },
  };
}

export default TermsOfService;
