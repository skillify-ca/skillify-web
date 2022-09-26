import { gql } from "@apollo/client";

export const FETCH_GAME_LEVEL = gql`
  query fetchGameLevel {
    longestStreakUserData {
      user {
        name
      }
      currentLevel
    }
  }
`;

// export type FetchCoachesResponse = {
//   data: Data;
// };



export type FetchGameLevelResponse = {
    longestStreakUserData: Array<CurrentLevelData>
};
  export type CurrentLevelData = {
    currentLevel: string;
  };

 