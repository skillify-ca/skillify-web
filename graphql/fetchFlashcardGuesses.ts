import { gql } from "@apollo/client";

export const FETCH_FLASHCARD_GUESSES = gql`
  query fetchGuess($userId: String, $skillId: String = "") {
    flashcard_guesses(
      where: { userId: { _eq: $userId }, _and: { skillId: { _eq: $skillId } } }
      order_by: { created_at: desc }
    ) {
      guess
      question
      timeTaken
      created_at
      is_correct
      session_id
    }
  }
`;
