import { gql } from "@apollo/client";

export const FETCH_ASSIGNMENT = gql`
  query fetchAssignment($assignmentId: Int = 0) {
    assignments(where: { id: { _eq: $assignmentId } }) {
      questions
    }
  }
`;
