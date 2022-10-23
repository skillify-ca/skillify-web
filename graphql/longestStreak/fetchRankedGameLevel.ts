import { gql } from "@apollo/client";

export const FETCH_RANKED_GAME_LEVEL = gql
`query fetchRankedGameLevel {
  longestStreakUserData(order_by: {gamesWon: desc_nulls_last, currentLevel: desc_nulls_last}) {
    user {
      name
    }
    currentLevel
    gamesLost
    gamesPlayed
    gamesWon
  }
} 
`;