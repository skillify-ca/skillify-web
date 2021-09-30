import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";

const MiddleOfQuiz = (displayQuestion, nextQuestion) => {
  return (
    <React.Fragment>
      <div className="flex flex-col gap-8 items-center">
        <div id="FormBody" className="flex flex-col gap-8">
          <p className="text-2xl text-center">{displayQuestion}</p>
        </div>
        <div id="quizImage">
          <img
            className="animate-fadeIn"
            src="/images/giza/SecretTunnelNextLevelQuestions.jpeg"
          ></img>
        </div>
        <div id="nextbutton">
          <Button
            label="Next"
            backgroundColor="blue"
            textColor="white"
            onClick={nextQuestion}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MiddleOfQuiz;
