import { gql } from "@apollo/client";

export const FETCH_FLASHCARD_GUESSES = gql`
  query fetchFlashcardGuesses {
    flashcard_guesses(
      where: { userId: { _eq: "1" } }
      order_by: { userId: desc }
    ) {
      guessId
      userId
      question
      guess
    }
  }
`;
