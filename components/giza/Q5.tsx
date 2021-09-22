import React from "react";
import { GuessData } from "../../pages/api/guessData";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

const Q5 = (displayQuestion, nextQuestion) => {
  const onSubmit = (guess: GuessData) => {
    console.log(guess);
    //Pass this guessData object into nextQuestion
    nextQuestion();
  };
  return (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={displayQuestion}
        option1={{
          id: "option1",
          text: "J",
        }}
        option2={{
          id: "option2",
          text: "K",
        }}
        option3={{
          id: "option3",
          text: "L",
        }}
        answer="L"
        submitGuess={onSubmit}
      />
    </React.Fragment>
  );
};

export default Q5;
