import { gql } from "@apollo/client";

export const FETCH_BADGE = gql`
  query fetchBadges {
    badges {
      id
      image
      title
    }
  }
`;
