import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import Profile from "../app/components/Profile/Profile";
import { checkAuth } from "../checkIsAuthMiddleware";
import userController from "../app/Apis/controllers/userController";
import {
  getLocalizedPath,
  getPageNamespaces,
  normalizeLocale,
} from "../app/utils/i18n";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  const normalizedLocale = normalizeLocale(locale);

  const authCheck = await checkAuth(context);

  if (!authCheck.authenticated) {
    return {
      redirect: {
        destination: getLocalizedPath(normalizedLocale, "/unAuthorized"),
        permanent: false,
      },
    };
  }
  const user = (await userController.getUserById(authCheck.user?.id)).data;
  return {
    props: {
      ...(await serverSideTranslations(
        normalizedLocale,
        getPageNamespaces("profile")
      )),
      user,
    },
  };
};

export default Profile;
