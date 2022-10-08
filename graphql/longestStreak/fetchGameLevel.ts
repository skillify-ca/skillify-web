import { gql } from "@apollo/client";

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
    longestStreakUserData: Array<CurrentLevelData>;
  };
  export type CurrentLevelData = {
    currentLevel: string;
  };


