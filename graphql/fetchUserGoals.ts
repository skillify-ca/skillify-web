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
    }
  }
`;

export type FetchUserGoalsDataResponse = {
  user_goals: Array<UserGoalsResponse>;
};

export type UserGoalsResponse = {
  __typename: string;
  createdAt: Date;
  goalName: string;
  id: string;
  isActive: boolean;
  updatedAt: Date;
  userId: string;
};

export type UserGoalsData = {
  __typename: string;
  createdAt: Date;
  goalName: string;
  id: string;
  isActive: boolean;
  updatedAt: Date;
  userId: string;
};
