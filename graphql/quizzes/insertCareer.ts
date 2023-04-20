// import { gql } from "@apollo/client";

// export const UPSERT_CAREER_QUIZ_RESPONSE = gql`
//   mutation UpsertCareerQuizResponse($objects: [career_quiz_insert_input!]!) {
//     insert_career_quiz(
//       objects: $objects
//       on_conflict: {
//         constraint: career_quiz_pkey
//         update_columns: [
//           name
//           email
//           institution
//           degree
//           result
//           industries
//           skills
//           tasks
//           education
//           experience
//         ]
//       }
//     ) {
//       affected_rows
//       returning {
//         id
//       }
//     }
//   }
// `;
