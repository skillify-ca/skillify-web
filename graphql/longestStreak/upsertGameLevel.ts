import { gql } from "@apollo/client";

export const UPSERT_GAME_LEVEL = gql`

mutation upsertCurrentLevel(
    $objects: [insert_longestStreakUserData!] = []) {
  insert_longestStreakUserData(currentLevel: $currentLevel, on_conflict: {constraint: longestStreakUserData_pkey, update_columns: [id, userId, currentLevel]}) {
    affected_rows
    returning {
      id
      userId
      currentLevel
    }
  }
}`
  ;