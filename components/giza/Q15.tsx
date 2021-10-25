import React from "react";
import { GuessData } from "../../pages/api/guessData";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

/*
  90 degrees
  100 degrees
  95 degrees - right answer
  105 degrees
*/

const Q13 = (displayQuestion, nextQuestion, isWrong) => {
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
            src="/images/giza/MathQuestionImage7.png"
          ></img>
        </div>
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
          answer="95 degrees"
          submitGuess={onSubmit}
        />
      </div>
    </React.Fragment>
  );
};

export default Q13;
