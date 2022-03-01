import { isBoolean } from "lodash";
import React, { useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Button } from "../../ui/Button";

type Q2Props = {
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
  partAguessStringF: string;
  setpartAGuessStringF: (guessString: string) => void;
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
  partBguessStringF: string;
  setpartBGuessStringF: (guessString: string) => void;
  partBguessStringSA: string;
  setpartBGuessStringSA: (guessString: string) => void;
};

//Future component, name: TypeAnswerQuestion
const Q2 = ({
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
  partAguessStringF,
  setpartAGuessStringF,
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
  partBguessStringF,
  setpartBGuessStringF,
  partBguessStringSA,
  setpartBGuessStringSA,
}: Q2Props) => {
  //Part A Answers
  //Front
  const partAanswerA = "2 x 3 = 6 cm^2";
  //Back
  const partAanswerB = "2 x 3 = 6 cm^2";
  //Right-Side
  const partAanswerC = "2 x 1 = 2 cm^2";
  //Left-Side
  const partAanswerD = "2 x 1 = 2 cm^2";
  //Top
  const partAanswerE = "1 x 3 = 3 cm^2";
  //Bottom
  const partAanswerF = "1 x 3 = 3 cm^2";
  //SA
  const partAanswerSA = "2((1x3) + (3x2) + (1x2)) = 22 cm^2";

  //Part B Answers
  //Front
  const partBanswerA = "1 x 4 = 4 cm^2";
  //Back
  const partBanswerB = "1 x 4 = 4 cm^2";
  //Right-side
  const partBanswerC = "1 x 2 = 2 cm^2";
  //Left-side
  const partBanswerD = "1 x 2 = 2 cm^2";
  //Top
  const partBanswerE = "2 x 4 = 8 cm^2";
  //Bottom
  const partBanswerF = "2 x 4 = 8 cm^2";
  //SA
  const partBanswerSA = "2((4x2) + (4x1) + (2x1)) = 28 cm^2";

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

  const onPartAGuessChangedF = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartAGuessStringF(newGuess);
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

  const onPartBGuessChangedF = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBGuessStringF(newGuess);
  };

  const onPartBGuessChangedSA = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBGuessStringSA(newGuess);
  };

  const onSubmit = () => {
    const guessString = `${partAguessStringA} , ${partAguessStringB} , ${partAguessStringC}, ${partAguessStringD}, ${partAguessStringE}, ${partAguessStringF}, ${partAguessStringSA}, ${partBguessStringA} , ${partBguessStringB} , ${partBguessStringC}, ${partBguessStringD}, ${partBguessStringE}, ${partBguessStringF}, ${partBguessStringSA}`;
    const answerString = `${partAanswerA} , ${partAanswerB} , ${partAanswerC}, ${partAanswerD}, ${partAanswerE}, ${partAanswerF}, ${partAanswerSA}, ${partBanswerA} , ${partBanswerB} , ${partBanswerC}, ${partBanswerD}, ${partBanswerE}, ${partBanswerF}, ${partBanswerSA}`;
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
          <img className="animate-fadeIn" src={imagePath}></img>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
          <div className="md:col-span-12 rounded-xl">
            <div className="grid grid-cols-12 rounded-xl font-bold items-center justify-between bg-yellow-600 p-4 gap-4">
              <div className="grid grid-cols-12 col-span-12 sm:col-span-6 rounded-xl font-bold justify-between bg-white p-4">
                <p className="col-span-12 text-center">a)</p>
                <div className="col-span-12">
                  <div className="flex gap-4 justify-between items-center">
                    <label>Front</label>
                    <input
                      className="p-4 w-8/12 sm:w-full text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringA}
                      onChange={(e) => onPartAGuessChangedA(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center justify-between">
                    <label>Back</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringB}
                      onChange={(e) => onPartAGuessChangedB(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center justify-between">
                    <label>Right Side</label>
                    <input
                      className="p-4 w-8/12 sm:w-full text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringC}
                      onChange={(e) => onPartAGuessChangedC(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center justify-between">
                    <label>Left Side</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringD}
                      onChange={(e) => onPartAGuessChangedD(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center justify-between">
                    <label>Top</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringE}
                      onChange={(e) => onPartAGuessChangedE(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center justify-between">
                    <label>Bottom</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringF}
                      onChange={(e) => onPartAGuessChangedF(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center justify-between">
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
                  <div className="flex gap-4 items-center justify-between">
                    <label>Front</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringA}
                      onChange={(e) => onPartBGuessChangedA(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center justify-between">
                    <label>Back</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringB}
                      onChange={(e) => onPartBGuessChangedB(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center justify-between">
                    <label>Right Side</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringC}
                      onChange={(e) => onPartBGuessChangedC(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center justify-between">
                    <label>Left Side</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringD}
                      onChange={(e) => onPartBGuessChangedD(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center justify-between">
                    <label>Top</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringE}
                      onChange={(e) => onPartBGuessChangedE(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center justify-between">
                    <label>Bottom</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringF}
                      onChange={(e) => onPartBGuessChangedF(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center justify-between">
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

export default Q2;
