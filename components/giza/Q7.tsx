import React from "react";
import { MultipleChoice } from "../questionTypes/MultipleChoice";
/*
  Acute Isosceles Triangle
  Obtuse Scalene Triangle
  Obtuse Isosceles Triangle - Right answer
  Acute Scalene Triangle
*/
const Q7 = (displayQuestion, nextQuestion) => {
  return (
    <React.Fragment>
      <MultipleChoice
        displayQuestion={displayQuestion}
        option1={{
          id: "option1",
          text: "Acute Isosceles Triangle",
        }}
        option2={{
          id: "option2",
          text: "Acute Scalene Triangle",
        }}
        option3={{
          id: "option3",
          text: "Obtuse Isosceles Triangle",
        }}
        answer="Obtuse Isosceles Triangle"
        submitGuess={nextQuestion}
      />
    </React.Fragment>
  );
};

export default Q7;
