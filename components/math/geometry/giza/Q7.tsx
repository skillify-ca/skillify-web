import React from "react";
import { GuessData } from "../../../../pages/api/guessData";
import { MultipleChoice } from "../../../questionTypes/MultipleChoice";
/*
  Acute Isosceles Triangle
  Obtuse Scalene Triangle
  Obtuse Isosceles Triangle - Right answer
  Acute Scalene Triangle
*/
const Q7 = (displayQuestion, nextQuestion, isWrong) => {
  const onSubmit = (guess: GuessData) => {
    //Pass this guessData object into nextQuestion
    if (guess.isCorrect == false) {
      isWrong(guess.isCorrect, guess);
    } else {
      nextQuestion(guess);
    }
  };
  return (
    <React.Fragment>
      <div className="flex flex-col gap-8 items-center">
        <div id="quizImage">
          <img
            className="animate-fadeIn"
            src="/images/giza/MathQuestionImage27.png"
          ></img>
        </div>
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
      </div>
    </React.Fragment>
  );
};

export default Q7;
