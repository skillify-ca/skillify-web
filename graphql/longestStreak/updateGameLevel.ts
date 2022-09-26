import { gql } from "@apollo/client";

export const UPDATE_GAME_LEVEL = gql`
mutation updateGameLevel($userId: String="", $currentLevel: Int=0) {
    update_longestStreakUserData(where: {userId:{_eq:$userId}}, _set:{currentLevel:$currentLevel}) {
      returning {
        userId
        currentLevel
      }
    }
  }`
