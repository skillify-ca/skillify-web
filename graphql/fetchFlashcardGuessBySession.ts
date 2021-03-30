import { gql } from "@apollo/client";

export const FETCH_FLASHCARD_GUESSES_BY_SESSION = gql`
  query fetchGuessBySession($session_id: uuid) {
    flashcard_guesses(
      where: {
        userId: { _eq: "1" }
        _and: { session_id: { _eq: $session_id } }
      }
      order_by: { created_at: desc }
    ) {
      guess
      question
      timeTaken
      created_at
      is_correct
    }
  }
`;
