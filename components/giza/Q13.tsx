import React from "react";
import { GuessData } from "../../pages/api/guessData";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

const Q13 = (displayQuestion, nextQuestion) => {
  /*
    They all have at least one right angle.
    Their interior angles add up to 360 degrees. - right answer
    Their interior angles add up to 180 degrees.
    They all have at least one obtuse angle.
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
          text: "They all have at least one right angle.",
        }}
        option2={{
          id: "option2",
          text: "Their interior angles add up to 360 degrees.",
        }}
        option3={{
          id: "option3",
          text: "They all have at least one obtuse angle.",
        }}
        answer="Their interior angles add up to 360 degrees."
        submitGuess={onSubmit}
      />
    </React.Fragment>
  );
};

export default Q13;
