import { gql } from "@apollo/client";

export const INSERT_CODING_LANGUAGE_QUIZ_RESPONSE = gql`
mutation insertCodingLanguageQuizResponse($name: String!, $email: String!) {
  insert_coding_language_quiz(objects: {name: $name, email: $email}) {
    returning {
      id
    }
  }
}
`;
