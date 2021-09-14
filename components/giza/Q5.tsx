import React from "react";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

const Q5 = (displayQuestion, nextQuestion) => {
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
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );
};

export default Q5;
