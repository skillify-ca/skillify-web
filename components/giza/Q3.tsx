import React from "react";
import { GuessData } from "../../pages/api/guessData";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

const Q3 = (displayQuestion, nextQuestion) => {
  const onSubmit = (guess: GuessData) => {
    //console.log(guess);
    //Pass this guessData object into nextQuestion
    nextQuestion(guess);
  };
  return (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={displayQuestion}
        option1={{
          id: "option1",
          text: "<1 + <2 + <3",
        }}
        option2={{
          id: "option2",
          text: "<2 + <3 + <4",
        }}
        option3={{
          id: "option3",
          text: "<3 + <4 + <5",
        }}
        answer="<3 + <4 + <5"
        submitGuess={onSubmit}
      />
    </React.Fragment>
  );
};

export default Q3;
