import { isBoolean } from "lodash";
import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";

//Future component, name: TypeAnswerQuestion
const Q2 = (displayQuestion, nextQuestion, isWrong) => {
  //Part A useStates
  const [partAguessStringA, setpartAguessStringA] = useState<string>("");
  const [partAguessStringB, setpartAguessStringB] = useState<string>("");
  const [partAguessStringC, setpartAguessStringC] = useState<string>("");
  const [partAguessStringD, setpartAguessStringD] = useState<string>("");
  const [partAguessStringE, setpartAguessStringE] = useState<string>("");
  const [partAguessStringSA, setpartAguessStringSA] = useState<string>("");

  //Part B useStates
  const [partBguessStringA, setpartBguessStringA] = useState<string>("");
  const [partBguessStringB, setpartBguessStringB] = useState<string>("");
  const [partBguessStringC, setpartBguessStringC] = useState<string>("");
  const [partBguessStringD, setpartBguessStringD] = useState<string>("");
  const [partBguessStringE, setpartBguessStringE] = useState<string>("");
  const [partBguessStringSA, setpartBguessStringSA] = useState<string>("");

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
    setpartAguessStringA(newGuess);
  };

  const onPartAGuessChangedB = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartAguessStringB(newGuess);
  };

  const onPartAGuessChangedC = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartAguessStringC(newGuess);
  };

  const onPartAGuessChangedD = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartAguessStringD(newGuess);
  };

  const onPartAGuessChangedE = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartAguessStringE(newGuess);
  };

  const onPartAGuessChangedSA = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartAguessStringSA(newGuess);
  };

  //Part B Guess Tracking
  const onPartBGuessChangedA = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBguessStringA(newGuess);
  };

  const onPartBGuessChangedB = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBguessStringB(newGuess);
  };

  const onPartBGuessChangedC = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBguessStringC(newGuess);
  };

  const onPartBGuessChangedD = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBguessStringD(newGuess);
  };

  const onPartBGuessChangedE = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBguessStringE(newGuess);
  };

  const onPartBGuessChangedSA = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBguessStringSA(newGuess);
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
            src="/images/surfaceArea/SA_Q2_image.png"
            width="800"
            height="400"
          ></img>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
          <div className="md:col-span-12 rounded-xl">
            <div className="grid grid-cols-12 rounded-xl font-bold items-center justify-between bg-yellow-600 p-4">
              <p className="col-span-6 text-center">a)</p>
              <p className="col-span-6 text-center">b)</p>
              <div className="grid grid-cols-12 col-span-12 rounded-xl font-bold justify-between bg-white p-4">
                <div className="col-span-6">
                  <div className="flex gap-4 items-center">
                    <label>Base 1</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringA}
                      onChange={(e) => onPartAGuessChangedA(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Base 2</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringB}
                      onChange={(e) => onPartAGuessChangedB(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Face 1</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringC}
                      onChange={(e) => onPartAGuessChangedC(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Face 2</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringD}
                      onChange={(e) => onPartAGuessChangedD(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Face 3</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringE}
                      onChange={(e) => onPartAGuessChangedE(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Surface Area</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringSA}
                      onChange={(e) => onPartAGuessChangedSA(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="flex gap-4 items-center">
                    <label>Base 1</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringA}
                      onChange={(e) => onPartBGuessChangedA(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Base 2</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringB}
                      onChange={(e) => onPartBGuessChangedB(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Face 1</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringC}
                      onChange={(e) => onPartBGuessChangedC(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Face 2</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringD}
                      onChange={(e) => onPartBGuessChangedD(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Face 3</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringE}
                      onChange={(e) => onPartBGuessChangedE(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Surface Area</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringSA}
                      onChange={(e) => onPartBGuessChangedSA(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Button
                label="Submit"
                backgroundColor="blue"
                textColor="white"
                onClick={onSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Q2;
