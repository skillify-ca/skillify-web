import { gql } from "@apollo/client";

export const UPDATE_CODING_LANGUAGE_QUIZ_RESPONSE = gql`
mutation updateCodingLanguageQuizResponse(
    $id: Int!,
    $reasons: jsonb,
    $fields: jsonb,
    $interests: jsonb,
    $result: String
  ) {
    update_coding_language_quiz(
      where: {id: {_eq: $id}},
      _set: {
        reasons: $reasons,
        fields: $fields,
        interests: $interests,
        result: $result
      }
    ) {
      affected_rows
    }
  }
`;
