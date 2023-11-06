import { gql } from "@apollo/client";

export const FETCH_USER_BY_EMAIL = gql`
  query fetchUserByEmail($email: String = "") {
    users(where: { email: { _eq: $email } }) {
      id
    }
  }
`;
