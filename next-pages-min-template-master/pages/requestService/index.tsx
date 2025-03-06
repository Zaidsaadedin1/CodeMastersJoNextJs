import { GetServerSideProps } from "next";
import RequestService from "../../app/components/RequestService/RequestService";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default RequestService;
