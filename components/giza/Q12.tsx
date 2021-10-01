import React from "react";
import { GuessData } from "../../pages/api/guessData";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

const Q12 = (displayQuestion, nextQuestion) => {
  /* 
    107 degrees - right answer
    287 degrees
    17 degrees
    None of the above
 */
  const onSubmit = (guess: GuessData) => {
    //Pass this guessData object into nextQuestion
    nextQuestion(guess);
  };
  return (
    <React.Fragment>
      <div className="flex flex-col gap-8 items-center">
        <div id="quizImage">
          <img src="/images/giza/MathQuestionImage6.png"></img>
        </div>
        <MultipleChoice
          displayQuestion={displayQuestion}
          option1={{
            id: "option1",
            text: "107 degrees",
          }}
          option2={{
            id: "option2",
            text: "287 degrees",
          }}
          option3={{
            id: "option3",
            text: "17 degrees",
          }}
          answer="107 degrees"
          submitGuess={onSubmit}
        />
      </div>
    </React.Fragment>
  );
};

export default Q12;
