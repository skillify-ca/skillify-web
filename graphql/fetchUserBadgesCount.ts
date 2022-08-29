import { gql } from "@apollo/client";

export const FETCH_USER_BADGES_COUNT = gql`
  query fetchUserBadgesCount($userId: String = "") {
    user_coding_badges_aggregate(where: { userId: { _eq: $userId } }) {
      aggregate {
        count
      }
    }
  }
`;

export type FetchUserBadgesCountResponse = {
  user_coding_badges_aggregate: UserCodingBadgesCount;
};

export type UserCodingBadgesCount = {
  aggregate: CountData;
};

export type CountData = {
  count: number;
};
