import { GetServerSideProps } from "next";
import JoinTheJourney from "../../app/components/JoinTheJourney/JoinTheJourney";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default JoinTheJourney;
