import { gql } from "@apollo/client";

export const FETCH_USER_GOALS_COUNT = gql`
  query fetchUserGoalsCount($userId: String = "") {
    user_goals_aggregate(where: { userId: { _eq: $userId } }) {
      aggregate {
        count
      }
    }
  }
`;

export type FetchGoalCountResponse = {
  user_goals_aggregate: GoalAggregate;
};

export type GoalAggregate = {
  aggregate: GoalAggregateNested;
};

export type GoalAggregateNested = {
  count: number;
};
