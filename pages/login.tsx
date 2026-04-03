import Login from "../app/components/Login/Login";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { GetStaticPropsContext } from "next";
import { getPageNamespaces, normalizeLocale } from "../app/utils/i18n";

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale;
  return {
    props: {
      ...(await serverSideTranslations(
        normalizeLocale(locale),
        getPageNamespaces("login")
      )),
    },
  };
}

export default Login;
