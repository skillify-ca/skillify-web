import { gql } from "@apollo/client";

export const FETCH_FLASHCARD_GUESSES = gql`
  query fetchGuess {
    flashcard_guesses(
      where: { userId: { _eq: "1" } }
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
