import { gql } from "@apollo/client";

export const FETCH_BADGE_INFO = gql`
  query fetchBadgeInfo($badgeId: Int = 0) {
    badges(where: { id: { _eq: $badgeId } }) {
      description
      id
      image
      title
    }
  }
`;
