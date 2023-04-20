import { useQuery } from "@apollo/client";
import { FETCH_COACHES } from "../graphql/studentPortal/coaches/fetchCoaches";

const gqlPracticePage = () => {
  const { data } = useQuery(FETCH_COACHES);
  return <div>{JSON.stringify(data)}</div>;
};

export default gqlPracticePage;
