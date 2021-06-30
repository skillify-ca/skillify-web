import { gql } from "@apollo/client";

export const SAVE_USER_GUESSES = gql`
  mutation saveUserGuesses(
    $guessesArray: [flashcard_guesses_insert_input!]! = {}
  ) {
    insert_flashcard_guesses(objects: $guessesArray) {
      affected_rows
    }
  }
`;
