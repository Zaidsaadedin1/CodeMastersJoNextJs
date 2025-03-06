import { GetServerSideProps } from "next";
import Sitemap from "../../app/components/Sitemap/Sitemap";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Sitemap;
