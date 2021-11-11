import { gql } from "@apollo/client";

// Fetch a all students attempt for a specific assignment
export const FETCH_USER_ASSIGNMENTS = gql`
  query fetchUserAssignments($assignment_id: String) {
    user_assignments(where: { assignment_id: { _eq: $assignment_id } }) {
      assignment_id
      user_solution
      user_drawn_lines
      user_images
      user {
        name
      }
      assignment {
        title
      }
    }
  }
`;
