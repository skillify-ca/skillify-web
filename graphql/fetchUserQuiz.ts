import { gql } from "@apollo/client";

export const FETCH_USER_QUIZZES = gql`
query fetchUserQuiz($userId: String = "", $badgeId: Int = 0) {
    user_quizzes(where: {userId: {_eq: $userId}, badgeId: {_eq: $badgeId}}) {
      accuracy
    }
  }
  `;