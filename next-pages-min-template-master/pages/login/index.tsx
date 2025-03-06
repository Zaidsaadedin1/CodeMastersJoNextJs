import { GetServerSideProps } from "next";
import Login from "../../app/components/Login/Login";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Login;
