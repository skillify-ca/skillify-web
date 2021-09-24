import React from "react";
import { GuessData } from "../../pages/api/guessData";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

const Q11 = (displayQuestion, nextQuestion) => {
  /*
        <a
        <b - Right answer
        <c
        None of the above.
  */
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
          text: "<a",
        }}
        option2={{
          id: "option2",
          text: "<b",
        }}
        option3={{
          id: "option3",
          text: "<c",
        }}
        answer="<b"
        submitGuess={onSubmit}
      />
    </React.Fragment>
  );
};

export default Q11;
