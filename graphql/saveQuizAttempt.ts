import { gql } from "@apollo/client";

export const SAVE_QUIZ_ATTEMPT = gql`
  mutation createQuizAttempt(
    $userId: String
    $badgeId: Int
    $accuracy: Int
    $quizTitle: String
  ) {
    insert_user_quizzes(
      objects: {
        accuracy: $accuracy
        userId: $userId
        quizTitle: $quizTitle
        badgeId: $badgeId
      }
    ) {
      returning {
        accuracy
        id
      }
    }
  }
`;
