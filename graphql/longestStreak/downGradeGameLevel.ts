import { gql } from "@apollo/client";

export const DOWNGRADE_GAME_LEVEL = gql`
mutation downGradeGameLevel($userId: String = "") {
    update_longestStreakUserData(where: {currentLevel: {_gt: 1}, userId: {_eq: $userId}}, _inc: {currentLevel: -1, gamesLost: 1, gamesPlayed: 1}) {
      returning {
        userId
        currentLevel
        gamesLost
        gamesPlayed
      }
    }
  }
  
  `