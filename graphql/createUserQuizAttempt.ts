import { gql } from "@apollo/client";

export const UPDATE_USER_SKILLS = gql
`mutation createQuizAttempt($userId: String, $badgeId: Int, $accuracy: Int, $quizTitle: String) {
    insert_user_quizzes(objects: {accuracy: $acc, userId: $userId, quizTitle: $quizTitle, badgeId: $badgeId}) {
      returning {
        accuracy
      }
    }
  }
  `;