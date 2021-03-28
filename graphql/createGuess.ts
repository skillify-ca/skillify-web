import { gql } from "@apollo/client";

export const CREATE_GUESS = gql`
  mutation createFlashcardGuess(
    $userId: String!
    $question: String!
    $guess: String!
    $timeTaken: numeric
  ) {
    insert_flashcard_guesses_one(
      object: {
        userId: $userId
        question: $question
        guess: $guess
        timeTaken: $timeTaken
      }
    ) {
      userId
      question
      guess
      timeTaken
    }
  }
`;
