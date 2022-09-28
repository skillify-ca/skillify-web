import { gql } from "@apollo/client";

// TODO add variables to this query to take in the userId
export const FETCH_GAME_LEVEL = gql`
  query fetchGameLevel($userId: String) {
    longestStreakUserData(where: { userId: { _eq: $userId } }) {
      user {
        name
      }
      currentLevel
    }
  }
`;

export type FetchGameLevelResponse = {
  longestStreakUserData: CurrentLevelData[];
};
export type CurrentLevelData = {
  currentLevel: string;
};
