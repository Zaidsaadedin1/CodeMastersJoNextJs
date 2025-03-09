import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import HomePage from "../../app/components/Home/Home";

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  console.log("Current locale:", locale);
  const translations = await serverSideTranslations(locale || "en", ["home"]);
  console.log("Translations loaded:", translations);
  return {
    props: translations,
  };
};

export default HomePage;
