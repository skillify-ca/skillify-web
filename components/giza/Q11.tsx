import React from "react";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

const Q11 = (displayQuestion, nextQuestion) => {
  /*
        <a
        <b - Right answer
        <c
        None of the above.
    */
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
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );
};

export default Q11;
