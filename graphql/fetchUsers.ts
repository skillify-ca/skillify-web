import { gql } from "@apollo/client";

export const FETCH_USERS = gql`
  query fetchUsers {
    users(where: {}) {
      id
      name
    }
  }
`;
