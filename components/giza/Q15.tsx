import React from "react";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

/*
  90 degrees
  100 degrees
  95 degrees - right answer
  105 degrees
*/

const Q13 = (displayQuestion, nextQuestion) => {
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
        answer="Their interior angles add up to 360 degrees."
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );
};

export default Q13;
