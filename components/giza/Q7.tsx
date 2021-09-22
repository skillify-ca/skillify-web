import React from "react";
import { GuessData } from "../../pages/api/guessData";
import { MultipleChoice } from "../questionTypes/MultipleChoice";
/*
  Acute Isosceles Triangle
  Obtuse Scalene Triangle
  Obtuse Isosceles Triangle - Right answer
  Acute Scalene Triangle
*/
const Q7 = (displayQuestion, nextQuestion) => {
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
        submitGuess={onSubmit}
      />
    </React.Fragment>
  );
};

export default Q7;
