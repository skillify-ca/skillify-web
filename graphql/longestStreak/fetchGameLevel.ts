import { gql } from "@apollo/client";
import { ExecSyncOptionsWithBufferEncoding } from "child_process";

export const FETCH_GAME_LEVEL = gql`
query fetchGameLevel($userId: String = "") {
  longestStreakUserData(where: {userId: {_eq: $userId}}) {
    user {
      name
    }
    currentLevel
    gamesLost
    gamesPlayed
    gamesWon
  }
}`;

export type FetchGameLevelResponse = {
  longestStreakUserData: Array<CurrentLevelData>;
};
export type CurrentLevelData = {
  currentLevel: string;
  gamesPlayed: string;
  gamesWon: string;
  gamesLost: string;
  user: UserLongestStreak;
};

export type UserLongestStreak = {
  name: string;
}

