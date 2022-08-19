import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser($link: String = "") {
    users(where: { link: { _eq: $link } }) {
      id
    }
  }
`;
