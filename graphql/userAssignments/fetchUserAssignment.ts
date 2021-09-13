import { gql } from "@apollo/client";

// Fetch a single students attempt at a specific assignment
export const FETCH_USER_ASSIGNMENT = gql`
  query fetchUserAssignment($assignment_id: String, $user_id: String) {
    user_assignments(
      where: {
        assignment_id: { _eq: $assignment_id }
        user_id: { _eq: $user_id }
      }
    ) {
      user_id
      assignment_id
      user_images
      user_solution
      user_drawn_lines
    }
  }
`;
