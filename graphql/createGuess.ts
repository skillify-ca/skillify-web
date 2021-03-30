import { gql } from "@apollo/client";

export const CREATE_GUESS = gql`
  mutation MyMutation(
    $is_correct: Boolean = false
    $question: String = ""
    $userId: String = ""
    $guess: String = ""
    $timeTaken: numeric = ""
  ) {
    insert_flashcard_guesses(
      objects: {
        is_correct: $is_correct
        question: $question
        timeTaken: $timeTaken
        userId: $userId
        guess: $guess
      }
    ) {
      returning {
        question
      }
    }
  }
`;
