import { gql } from "@apollo/client";

export const CREATE_ASSIGNMENT = gql`
  mutation insertAssignment($questions: jsonb = "") {
    insert_assignments(objects: { questions: $questions }) {
      returning {
        id
      }
    }
  }
`;
