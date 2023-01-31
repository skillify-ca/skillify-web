import { gql } from "@apollo/client";

export const FETCH_TOTAL_USER_BADGES_COUNT = gql`
query fetchTotalUserBadgesCount {
  coding_badges_aggregate {
    aggregate {
      count
    }
  }
}
`;

export type FetchTotalBadgesCountResponse = {
  coding_badges_aggregate: {
    aggregate: {
      count: number;
    };
  };
}