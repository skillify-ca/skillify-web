import { gql } from "@apollo/client";

export const UPDATE_SOLUTIONS_RELEASED_FOR_ASSIGNMENT = gql`
  mutation updateSolutionsReleasedForAssignment(
    $solutions_released: Boolean = false
    $assignment_id: String = ""
  ) {
    update_assignments(
      where: { id: { _eq: $assignment_id } }
      _set: { solutions_released: $solutions_released }
    ) {
      affected_rows
    }
  }
`;
