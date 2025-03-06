import { GetServerSideProps } from "next";
import OurPower from "../../app/components/OurPower/OurPower";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default OurPower;
