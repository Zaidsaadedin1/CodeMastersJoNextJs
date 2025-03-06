import { GetServerSideProps } from "next";
import HomePage from "../../app/components/Home/Home";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default HomePage;
