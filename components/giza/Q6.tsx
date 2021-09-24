import React from "react";
import { GuessData } from "../../pages/api/guessData";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

const Q6 = (displayQuestion, nextQuestion) => {
  const onSubmit = (guess: GuessData) => {
    //Pass this guessData object into nextQuestion
    nextQuestion(guess);
  };
  return (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={displayQuestion}
        option1={{
          id: "option1",
          text: "60 degrees + 60 degrees + 60 degrees",
        }}
        option2={{
          id: "option2",
          text: "65 degrees + 65 degrees + 50 degrees",
        }}
        option3={{
          id: "option3",
          text: "90 degrees + 40 degrees + 50 degrees",
        }}
        answer="65 degrees + 65 degrees + 50 degrees"
        submitGuess={onSubmit}
      />
    </React.Fragment>
  );
};

export default Q6;
