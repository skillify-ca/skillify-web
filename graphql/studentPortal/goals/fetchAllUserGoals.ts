import { gql } from "@apollo/client";

export const FETCH_ALL_USER_GOALS = gql`
  query fetchAllUserGoals {
    user_goals(
      order_by: { updatedAt: desc }
      where: {
        usersTable: { enrolled: { _eq: true } }
        isComplete: { _eq: true }
      }
    ) {
      updatedAt
      goalName
      usersTable {
        name
        id
      }
    }
  }
`;

export type FetchAllUserGoalsDataResponse = {
  user_goals: Array<AllUserGoalsData>;
};

export type AllUserGoalsData = {
  goalName: string;
  userId: string;
  updatedAt: Date;
};
