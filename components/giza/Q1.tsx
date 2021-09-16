import React from "react";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

const Q1 = (displayQuestion, nextQuestion) => {
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
        answer="120"
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );
};

export default Q1;
