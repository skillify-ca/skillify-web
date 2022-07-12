import { gql } from "@apollo/client";

// updates goal with new values in $objects if existing id is provided; inserts new goal if no ID provided
// userId in objects must exist in users table; if id is provided, it must exist in goals table

export const UPSERT_USER_GOALS = gql`
  mutation upsertUserGoals($objects: [user_goals_insert_input!]!) {
    insert_user_goals(
      objects: $objects
      on_conflict: {
        constraint: user_goals_pkey
        update_columns: [
          goalName
          isArchived
          isComplete
          updatedAt
          targetDate
        ]
      }
    ) {
      affected_rows
      returning {
        id
        goalName
        isArchived
        isComplete
        targetDate
        updatedAt
        userId
        createdAt
      }
    }
  }
`;
