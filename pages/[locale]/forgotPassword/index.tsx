import { GetServerSideProps } from "next";
import ForgotPassword from "../../../app/components/ForgotPassword/ForgotPassword";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default ForgotPassword;
