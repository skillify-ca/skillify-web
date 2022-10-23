import { gql } from "@apollo/client";

export const RESET_GAME_LEVEL = gql`
mutation resetGameLevel($userId: String = "") {
    update_longestStreakUserData(where: {currentLevel: {_gt: 1}, userId: {_eq: $userId}}, _set: {currentLevel: 1}) {
      returning {
        userId
        currentLevel
      }
    }
  }

  `


