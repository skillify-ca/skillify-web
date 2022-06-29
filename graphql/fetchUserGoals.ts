import { gql } from "@apollo/client";

export const FETCH_USER_GOALS = gql`
  query fetchUserGoals($userId: String = "") {
    user_goals(where: { userId: { _eq: $userId } }) {
      createdAt
      goalName
      id
      isActive
      updatedAt
      userId
      isComplete
      targetDate
      isArchived
    }
  }
`;

export type FetchUserGoalsDataResponse = {
  user_goals: Array<UserGoalsData>;
};

export type UserGoalsData = {
  createdAt: Date;
  goalName: string;
  id: string;
  isActive: boolean;
  updatedAt: Date;
  userId: string;
  isComplete: boolean;
  targetDate: Date;
  isArchived: boolean;
};
