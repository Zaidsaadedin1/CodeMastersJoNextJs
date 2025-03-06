import { GetServerSideProps } from "next";
import TermsOfService from "../../app/components/TermsOfService/TermsOfService";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default TermsOfService;
