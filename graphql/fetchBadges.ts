import { gql } from "@apollo/client";

export const FETCH_BADGES = gql`
  query fetchBadges {
    badges {
      id
      image
      title
    }
  }
`;
