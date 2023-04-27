import { gql } from "@apollo/client";

export const INSERT_CAREER_QUIZ_RESPONSE = gql`
  mutation INSERT_CAREER_QUIZ_RESPONSE($name: String!, $email: String!) {
    insert_career_quiz(objects: { name: $name, email: $email }) {
      returning {
        id
      }
    }
  }
`;
