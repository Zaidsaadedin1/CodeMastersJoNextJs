import { GetServerSideProps } from "next";
import PrivacyPolicy from "../../app/components/PrivacyPolicy/PrivacyPolicy";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default PrivacyPolicy;
