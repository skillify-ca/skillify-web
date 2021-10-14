import { gql } from "@apollo/client";

export const FETCH_ASSIGNMENT = gql`
  query fetchAssignment($assignmentId: String = "0") {
    assignments(where: { id: { _eq: $assignmentId } }) {
      questions
      solutions_released
      title
    }
  }
`;
