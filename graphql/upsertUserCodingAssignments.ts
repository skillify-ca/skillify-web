import { gql } from "@apollo/client";

// updates goal with new values in $objects if existing id is provided; inserts new goal if no ID provided
// userId in objects must exist in users table; if id is provided, it must exist in goals table

//question on how you decide what information to upsert -- which columns?
export const UPSERT_USER_CODING_ASSIGNMENTS = gql`
  mutation upsertUserCodingAssignments($objects: [user_coding_assignments_insert_input!]!) {
    insert_user_coding_assignments(
      objects: $objects
      on_conflict: {
        constraint: user_coding_assignments_pkey
        update_columns: [
          submission_link
          assignment_id
        ]
      }
    ) {
      affected_rows
      returning {
        user_id
        assignment_id
        hasViewed
        id
        node_id
        submission_link
        template_link
        unit_id
      }
    }
  }
`;

