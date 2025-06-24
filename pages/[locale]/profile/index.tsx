import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { i18nConfig } from "../../../i18n-config";
import Profile from "../../../app/components/Profile/Profile";
import { GetServerSidePropsContext } from "next";
import { checkAuth } from "../../../checkIsAuthMiddleware";
import userController from "../../../app/controllers/userController";

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
  console.log("Making request to /User/" + authCheck.user?.id); // Log request

  const res = await userController.getUserById(authCheck.user?.id);
  return {
    props: {
      ...(await serverSideTranslations(locale || i18nConfig.defaultLocale, [
        "menuComponent",
        "footer",
        "profile",
      ])),
      user: res.data,
    },
  };
};

export default Profile;
