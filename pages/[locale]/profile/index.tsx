import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18nConfig } from "../../../i18n-config";
import Profile from "../../../app/components/Profile/Profile";
import { checkAuth } from "../../../checkIsAuthMiddleware";
import userController from "../../../app/Apis/controllers/userController";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locale = context.locale ?? i18nConfig.defaultLocale;
  console.log("Locale:", locale);

  const authCheck = await checkAuth(context);

  if (!authCheck.authenticated) {
    return {
      redirect: {
        destination: `/${locale}/unAuthorized`,
        permanent: false,
      },
    };
  }

  const res = await userController.getUserById(authCheck.user?.id);

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "profile",
        "menuComponent",
        "footer",
      ])),
      user: res.data,
    },
  };
};

export default Profile;
