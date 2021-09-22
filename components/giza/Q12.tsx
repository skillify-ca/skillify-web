import React from "react";
import { GuessData } from "../../pages/api/guessData";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

const Q12 = (displayQuestion, nextQuestion) => {
  /* 
    107 degrees - right answer
    287 degrees
    17 degrees
    None of the above
 */
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
          text: "107 degrees",
        }}
        option2={{
          id: "option2",
          text: "287 degrees",
        }}
        option3={{
          id: "option3",
          text: "17 degrees",
        }}
        answer="107 degrees"
        submitGuess={onSubmit}
      />
    </React.Fragment>
  );
};

export default Q12;
