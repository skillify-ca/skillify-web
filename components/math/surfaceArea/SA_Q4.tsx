import { isBoolean } from "lodash";
import React, { useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Button } from "../../ui/Button";

type Q4Props = {
  displayQuestion: string;
  imagePath: string;
  nextQuestion: (guess: GuessData) => void;
  partAguessStringA: string;
  setpartAGuessStringA: (guessString: string) => void;
  partAguessStringB: string;
  setpartAGuessStringB: (guessString: string) => void;
  partAguessStringC: string;
  setpartAGuessStringC: (guessString: string) => void;
  partAguessStringD: string;
  setpartAGuessStringD: (guessString: string) => void;
  partAguessStringE: string;
  setpartAGuessStringE: (guessString: string) => void;
  partAguessStringSA: string;
  setpartAGuessStringSA: (guessString: string) => void;
  partBguessStringA: string;
  setpartBGuessStringA: (guessString: string) => void;
  partBguessStringB: string;
  setpartBGuessStringB: (guessString: string) => void;
  partBguessStringC: string;
  setpartBGuessStringC: (guessString: string) => void;
  partBguessStringD: string;
  setpartBGuessStringD: (guessString: string) => void;
  partBguessStringE: string;
  setpartBGuessStringE: (guessString: string) => void;
  partBguessStringSA: string;
  setpartBGuessStringSA: (guessString: string) => void;
};

//Future component, name: TypeAnswerQuestion
const Q4 = ({
  displayQuestion,
  imagePath,
  nextQuestion,
  partAguessStringA,
  setpartAGuessStringA,
  partAguessStringB,
  setpartAGuessStringB,
  partAguessStringC,
  setpartAGuessStringC,
  partAguessStringD,
  setpartAGuessStringD,
  partAguessStringE,
  setpartAGuessStringE,
  partAguessStringSA,
  setpartAGuessStringSA,
  partBguessStringA,
  setpartBGuessStringA,
  partBguessStringB,
  setpartBGuessStringB,
  partBguessStringC,
  setpartBGuessStringC,
  partBguessStringD,
  setpartBGuessStringD,
  partBguessStringE,
  setpartBGuessStringE,
  partBguessStringSA,
  setpartBGuessStringSA,
}: Q4Props) => {
  //Part A Answers
  //Base 1
  const partAanswerA = "4 x 3 / 2 = 6 cm^2";
  //Base 2
  const partAanswerB = "4 x 3 / 2 = 6 cm^2";
  //Face 1
  const partAanswerC = "4 x 3 = 12 cm^2";
  //Face 2
  const partAanswerD = "4 x 4 = 16 cm^2";
  //Face 3
  const partAanswerE = "4 x 5 = 20 cm^2";
  //SA
  const partAanswerSA = "(4x3) + 2 (4x5) + (4x4) = 58 cm^2";

  //Part B Answers
  //Base 1
  const partBanswerA = "6 x 4 / 2 = 12 cm^2";
  //Base 2
  const partBanswerB = "6 x 4 / 2 = 12 cm^2";
  //Face 1
  const partBanswerC = "5 x 4 = 20 cm^2";
  //Face 2
  const partBanswerD = "5 x 4 = 20 cm^2";
  //Face 3
  const partBanswerE = "6 x 4 = 24 cm^2";
  //SA
  const partBanswerSA = "(4x6) + 2 (4x5) + (4x6) = 88 cm^2";

  //Part A Guess Tracking
  const onPartAGuessChangedA = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartAGuessStringA(newGuess);
  };

  const onPartAGuessChangedB = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartAGuessStringB(newGuess);
  };

  const onPartAGuessChangedC = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartAGuessStringC(newGuess);
  };

  const onPartAGuessChangedD = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartAGuessStringD(newGuess);
  };

  const onPartAGuessChangedE = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartAGuessStringE(newGuess);
  };

  const onPartAGuessChangedSA = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartAGuessStringSA(newGuess);
  };

  //Part B Guess Tracking
  const onPartBGuessChangedA = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBGuessStringA(newGuess);
  };

  const onPartBGuessChangedB = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBGuessStringB(newGuess);
  };

  const onPartBGuessChangedC = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBGuessStringC(newGuess);
  };

  const onPartBGuessChangedD = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBGuessStringD(newGuess);
  };

  const onPartBGuessChangedE = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBGuessStringE(newGuess);
  };

  const onPartBGuessChangedSA = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBGuessStringSA(newGuess);
  };

  const onSubmit = () => {
    const guessString = `${partAguessStringA} , ${partAguessStringB} , ${partAguessStringC}, ${partAguessStringD}, ${partAguessStringE}, ${partAguessStringSA}, ${partBguessStringA} , ${partBguessStringB} , ${partBguessStringC}, ${partBguessStringD}, ${partBguessStringE}, ${partBguessStringSA}`;
    const answerString = `${partAanswerA} , ${partAanswerB} , ${partAanswerC}, ${partAanswerD}, ${partAanswerE}, ${partAanswerSA}, ${partBanswerA} , ${partBanswerB} , ${partBanswerC}, ${partBanswerD}, ${partBanswerE}, ${partBanswerSA}`;
    const guess: GuessData = {
      guess: guessString,
      isCorrect: guessString == answerString,
    };

    nextQuestion(guess);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col gap-8 items-center">
        <p className="text-2xl text-center">{displayQuestion}</p>
        <div id="quizImage">
          <img
            className="animate-fadeIn"
            src={imagePath}
            width="800"
            height="400"
          ></img>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
          <div className="md:col-span-12 rounded-xl">
            <div className="grid grid-cols-12 rounded-xl font-bold items-center justify-between bg-yellow-600 p-4">
              <div className="grid grid-cols-12 col-span-12 sm:col-span-6 rounded-xl font-bold justify-between bg-white p-4">
                <p className="col-span-12 text-center">a)</p>
                <div className="col-span-12">
                  <div className="flex gap-4 justify-between items-center">
                    <label>Base 1</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringA}
                      onChange={(e) => onPartAGuessChangedA(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <label>Base 2</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringB}
                      onChange={(e) => onPartAGuessChangedB(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <label>Face 1</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringC}
                      onChange={(e) => onPartAGuessChangedC(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <label>Face 2</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringD}
                      onChange={(e) => onPartAGuessChangedD(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <label>Face 3</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringE}
                      onChange={(e) => onPartAGuessChangedE(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <label>Surface Area</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringSA}
                      onChange={(e) => onPartAGuessChangedSA(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 col-span-12 sm:col-span-6 rounded-xl font-bold justify-between bg-white p-4">
                <p className="col-span-12 text-center">b)</p>
                <div className="col-span-12">
                  <div className="flex gap-4 justify-between items-center">
                    <label>Base 1</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringA}
                      onChange={(e) => onPartBGuessChangedA(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <label>Base 2</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringB}
                      onChange={(e) => onPartBGuessChangedB(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <label>Face 1</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringC}
                      onChange={(e) => onPartBGuessChangedC(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <label>Face 2</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringD}
                      onChange={(e) => onPartBGuessChangedD(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <label>Face 3</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringE}
                      onChange={(e) => onPartBGuessChangedE(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <label>Surface Area</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringSA}
                      onChange={(e) => onPartBGuessChangedSA(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-col items-center">
          <Button
            label="Submit"
            backgroundColor="blue"
            textColor="white"
            onClick={onSubmit}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Q4;
