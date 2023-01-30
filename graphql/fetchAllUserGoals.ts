import { gql } from "@apollo/client";

export const FETCH_ALL_USER_GOALS = gql`
query fetchAllUserGoals($enrolledIds: [String!]) {
    user_goals(where: {userId: {_in: $enrolledIds}, isComplete: {_eq: true}}, order_by: {userId: asc}) {
      goalName
      targetDate
      userId
    }
  }
`;

export type FetchAllUserGoalsDataResponse = {
  user_goals: Array<AllUserGoalsData>;
};

export type AllUserGoalsData = {
  goalName: string;
  userId: string;
  targetDate: Date;
};