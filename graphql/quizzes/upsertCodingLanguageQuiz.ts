import { gql } from "@apollo/client";

export const UPSERT_CODING_LANGUAGE_QUIZ_RESPONSE = gql`
  mutation upsertCodingLanguageQuizResponse(
    $objects: [coding_language_quiz_insert_input!]!
  ) {
    insert_coding_language_quiz(
      objects: $objects
      on_conflict: {
        constraint: coding_language_quiz_pkey
        update_columns: [name, email, reasons, fields, interests, result]
      }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
