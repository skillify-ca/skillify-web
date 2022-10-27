import { gql } from "@apollo/client";

export const FETCH_USER_GOALS = gql`
  query fetchUserGoals($userId: String = "") {
    user_goals(where: { userId: { _eq: $userId } }) {
      createdAt
      goalName
      id
      updatedAt
      userId
      isComplete
      targetDate
      isArchived
    }
  }
`;

export const FETCH_USER_GOAL_DETAIL = gql`
  query fetchUserGoalDetail($userId: String = "", $id: uuid = "") {
    user_goals(
      where: { _and: [{ userId: { _eq: $userId } }, { id: { _eq: $id } }] }
    ) {
      createdAt
      goalName
      goalNotes
      id
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
  goalNotes?: string;
  id: string;
  updatedAt: Date;
  userId: string;
  isComplete: boolean;
  targetDate: Date;
  isArchived: boolean;
};
