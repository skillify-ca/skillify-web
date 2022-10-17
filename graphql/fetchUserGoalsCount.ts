import { gql } from "@apollo/client";

export const FETCH_USER_GOALS_COUNT = gql`
  query fetchUserGoalsCount($userId: String = "") {
    user_goals__aggregate(where: { userId: { _eq: $userId } }) {
      aggregate {
        count
      }
    }
  }
`;
