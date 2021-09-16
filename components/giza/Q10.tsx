import React from "react";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

const Q10 = (displayQuestion, nextQuestion) => {
  /*
    115 degrees
    295 degrees
    65 degrees - right answer
    15 degrees
  */
  return (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={displayQuestion}
        option1={{
          id: "option1",
          text: "115 degrees",
        }}
        option2={{
          id: "option2",
          text: "65 degrees",
        }}
        option3={{
          id: "option3",
          text: "15 degrees",
        }}
        answer="65 degrees"
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );
};

export default Q10;
