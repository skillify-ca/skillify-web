import { gql } from "@apollo/client";

export const INSERT_CAREER_QUIZ_RESPONSE = gql`
  mutation INSERT_CAREER_QUIZ_RESPONSE($objects: [career_quiz_insert_input!]!) {
    insert_career_quiz(objects: $objects) {
      returning {
        name
        result
        email
      }
    }
  }
`;
