import { gql } from "@apollo/client";

export const FETCH_ALL_BADGES = gql`
  query fetchAllBadges {
    coding_badges {
      description
      id
      image
      title
    }
  }
`;
