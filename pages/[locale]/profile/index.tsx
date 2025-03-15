import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { i18nConfig } from "../../../i18n-config";
import Profile from "../../../app/components/Profile/Profile";
import { GetServerSidePropsContext } from "next";
import { checkAuth } from "../../../checkIsAuthMiddleware";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { locale } = context;
  const authCheck = await checkAuth(context);

  if (!authCheck.authenticated) {
    return {
      redirect: {
        destination: `/${locale || i18nConfig.defaultLocale}/unAuthorized`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale || i18nConfig.defaultLocale, [
        "menuComponent",
        "footer",
        "profile",
      ])),
      user: authCheck.user,
    },
  };
};

export default Profile;
