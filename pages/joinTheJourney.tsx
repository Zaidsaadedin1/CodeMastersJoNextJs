import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { GetStaticPropsContext } from "next";
import JoinTheJourney from "../app/components/JoinTheJourney/JoinTheJourney";

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale;
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "joinTheJourney",
      ])),
    },
  };
}

export default JoinTheJourney;
