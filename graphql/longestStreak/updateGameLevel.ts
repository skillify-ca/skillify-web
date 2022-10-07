import { gql } from "@apollo/client";

export const UPDATE_GAME_LEVEL = gql`
mutation updateGameLevel($userId: String = "") {
  update_longestStreakUserData(where: {currentLevel: {_lt: 5}, userId: {_eq: $userId}}, _inc: {currentLevel: 1, gamesPlayed: 1, gamesWon: 1}) {
    returning {
      userId
      currentLevel
      gamesPlayed
      gamesWon
    }
  }
}


  `
