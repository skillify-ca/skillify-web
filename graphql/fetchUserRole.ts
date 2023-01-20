import { gql } from "@apollo/client";

export const FETCH_USER_ROLE = gql`
query FetchUserRole($_id: String = "") {
    users(where: {id: {_eq: $_id}}) {
      userRole {
        value
      }
    }
  }
`;