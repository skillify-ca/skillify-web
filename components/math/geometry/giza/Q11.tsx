import React from "react";
import { GuessData } from "../../../../pages/api/guessData";
import { MultipleChoice } from "../../../questionTypes/MultipleChoice";

const Q11 = (displayQuestion, nextQuestion, isWrong) => {
  /*
        <a
        <b - Right answer
        <c
        None of the above.
  */
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
            src="/images/giza/MathQuestionImage4.png"
          ></img>
        </div>
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
          submitGuess={onSubmit}
        />
      </div>
    </React.Fragment>
  );
};

export default Q11;
