import { gql } from "@apollo/client";

export const UPSERT_GAME_LEVEL = gql`

mutation upsertLongestStreakLevel($userId: String = "", $currentLevel: Int = 1) {
    insert_longestStreakUserData_one(object: {userId: $userId, currentLevel: $currentLevel}, on_conflict: {constraint: longestStreakUserData_pkey, update_columns: currentLevel, where: {userId: {_eq: $userId}}}) {
      currentLevel
      userId
    }
  }`
  ;