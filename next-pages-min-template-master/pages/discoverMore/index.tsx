import { GetServerSideProps } from "next";
import DiscoverMore from "../../app/components/DiscoverMore/DiscoverMore";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default DiscoverMore;
