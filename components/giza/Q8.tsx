import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";

//PINKYELLOWBLUEPURPLEGREEN
const Q8 = (displayQuestion, nextQuestion, isWrong) => {
  const [guessString, setGuessString] = useState<string>("");

  const answer = "PINKYELLOWBLUEPURPLEGREEN";

  const imgArray = [
    "/images/giza/Triangle1.png",
    "/images/giza/Triangle2.png",
    "/images/giza/Triangle3.png",
    "/images/giza/Triangle4.png",
    "/images/giza/Triangle5.png",
  ];

  const imgArrayValue = ["BLUE", "GREEN", "PURPLE", "YELLOW", "PINK"];

  const passwordCreation = (passwordPiece: string) => {
    const stringtoAdd = passwordPiece;
    const newGuess = guessString + stringtoAdd;
    setGuessString(newGuess);
  };

  const clear = () => {
    setGuessString("");
  };
  const onSubmit = () => {
    const guess: GuessData = {
      guess: guessString,
      isCorrect: guessString == answer,
    };
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
        <div id="quizImages" className="grid grid-cols-5 gap-4 mt-4">
          {imgArray.map((imgPath, index) => (
            <img
              className="animate-fadeIn"
              src={imgPath}
              alt={imgArrayValue[index]}
              onClick={(e) => passwordCreation(imgArrayValue[index])}
            ></img>
          ))}
        </div>
        <p className="text-2xl text-center">{displayQuestion}</p>
        <div className="text-center">
          <label>Final Answer</label>
          <input
            className="p-4 text-lg"
            placeholder="Enter Code here"
            value={guessString}
            disabled={true}
          />
        </div>
        <div className="flex flex-row items-center gap-4">
          <Button
            label="Submit"
            backgroundColor="blue"
            textColor="white"
            onClick={onSubmit}
          />
          <Button
            label="Clear"
            backgroundColor="blue"
            textColor="white"
            onClick={clear}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Q8;
