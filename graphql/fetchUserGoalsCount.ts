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

//commented out query that will pull onlly the number of goals that are due within 7 days.
//this feature is to be implemented soon.
// query fetchUserGoalsCount($userId: String = "", $urgentGoals: timestamptz = "urgentGoals") {
//   user_goals_aggregate(where: {userId: {_eq: $userId}, targetDate: {_lte: $urgentGoals}}) {
//     aggregate {
//       count
//     }
//   }
// }