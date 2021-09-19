import React from "react";
import { GuessData } from "../../pages/api/guessData";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

const Q1 = (displayQuestion, nextQuestion) => {
  const onSubmit = (guess: GuessData) => {
    console.log(guess);
    //Pass this guessData object into nextQuestion
    nextQuestion;
  };
  return (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={displayQuestion}
        option1={{
          id: "option1",
          text: "90",
        }}
        option2={{
          id: "option2",
          text: "180",
        }}
        option3={{
          id: "option3",
          text: "360",
        }}
        answer="180"
        submitGuess={onSubmit}
      />
    </React.Fragment>
  );
};

export default Q1;
