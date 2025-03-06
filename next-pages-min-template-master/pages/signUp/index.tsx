import { GetServerSideProps } from "next";
import SignUp from "../../app/components/SignUp/SignUp";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default SignUp;
