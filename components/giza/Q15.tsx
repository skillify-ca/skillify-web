import React from "react";
import { GuessData } from "../../pages/api/guessData";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

/*
  90 degrees
  100 degrees
  95 degrees - right answer
  105 degrees
*/

const Q13 = (displayQuestion, nextQuestion) => {
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
          text: "90 degrees",
        }}
        option2={{
          id: "option2",
          text: "100 degrees",
        }}
        option3={{
          id: "option3",
          text: "95 degrees",
        }}
        answer="95 degrees"
        submitGuess={onSubmit}
      />
    </React.Fragment>
  );
};

export default Q13;
