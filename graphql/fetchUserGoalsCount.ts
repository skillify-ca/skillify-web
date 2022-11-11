import { gql } from "@apollo/client";

export const FETCH_USER_GOALS_COUNT = gql`
query fetchUserGoalsCount($userId: String = "", $goalDateThreshold: timestamptz = "goalDateThreshold") {
  user_goals_aggregate(where: {userId: {_eq: $userId}, targetDate: {_lte: $goalDateThreshold}, isComplete: {_eq: false}, _or: [
    {isArchived: {_eq: false}},
    {isArchived: {_is_null: true}}
  ]}) {
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


