import {useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";

const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
      last_seen
    }
  }
`;

const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return <div>Users: {data}</div>;
};


export default UserList;
export {GET_USERS};
