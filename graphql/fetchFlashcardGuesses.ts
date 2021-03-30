import { gql } from "@apollo/client";

export const FETCH_FLASHCARD_GUESSES = gql`
  query fetchGuessBySession {
    flashcard_guesses(where: { userId: { _eq: "1" } }) {
      guess
      question
      timeTaken
      created_at
      is_correct
    }
  }
`;
