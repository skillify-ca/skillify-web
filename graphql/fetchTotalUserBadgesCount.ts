import { gql } from "@apollo/client";

export const FETCH_TOTAL_USER_BADGES_COUNT = gql`
query fetchTotalUserBadgesCount {
  user_coding_badges_aggregate {
    aggregate {
      count(columns: badgeId, distinct: true)
    }
  }
}
`;