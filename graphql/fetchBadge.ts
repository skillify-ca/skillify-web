import { gql } from "@apollo/client";

export const FETCH_BADGE = gql`
  query fetchBadgeInfo($badgeId: Int = 0) {
    coding_badges(where: { id: { _eq: $badgeId } }) {
      description
      id
      image
      title
    }
  }
`;
