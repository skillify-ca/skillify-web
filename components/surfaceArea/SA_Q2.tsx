import { isBoolean } from "lodash";
import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";

//Future component, name: TypeAnswerQuestion
const Q1 = (displayQuestion, nextQuestion, isWrong) => {
  //Part A useStates
  const [partAguessStringA, setpartAguessStringA] = useState<string>("");
  const [partAguessStringB, setpartAguessStringB] = useState<string>("");
  const [partAguessStringC, setpartAguessStringC] = useState<string>("");
  const [partAguessStringD, setpartAguessStringD] = useState<string>("");
  const [partAguessStringE, setpartAguessStringE] = useState<string>("");
  const [partAguessStringF, setpartAguessStringF] = useState<string>("");
  const [partAguessStringSA, setpartAguessStringSA] = useState<string>("");

  //Part B useStates
  const [partBguessStringA, setpartBguessStringA] = useState<string>("");
  const [partBguessStringB, setpartBguessStringB] = useState<string>("");
  const [partBguessStringC, setpartBguessStringC] = useState<string>("");
  const [partBguessStringD, setpartBguessStringD] = useState<string>("");
  const [partBguessStringE, setpartBguessStringE] = useState<string>("");
  const [partBguessStringF, setpartBguessStringF] = useState<string>("");
  const [partBguessStringSA, setpartBguessStringSA] = useState<string>("");

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

  const onPartAGuessChangedF = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartAguessStringF(newGuess);
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

  const onPartBGuessChangedF = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBguessStringF(newGuess);
  };

  const onPartBGuessChangedSA = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBguessStringSA(newGuess);
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
          <img
            className="animate-fadeIn"
            src="/images/surfaceArea/SA_Q1_image.png"
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
                    <label>Front</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringA}
                      onChange={(e) => onPartAGuessChangedA(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Back</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringB}
                      onChange={(e) => onPartAGuessChangedB(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Right Side</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringC}
                      onChange={(e) => onPartAGuessChangedC(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Left Side</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringD}
                      onChange={(e) => onPartAGuessChangedD(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Top</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringE}
                      onChange={(e) => onPartAGuessChangedE(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Bottom</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partAguessStringF}
                      onChange={(e) => onPartAGuessChangedF(e.target.value)}
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
                    <label>Front</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringA}
                      onChange={(e) => onPartBGuessChangedA(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Back</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringB}
                      onChange={(e) => onPartBGuessChangedB(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Right Side</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringC}
                      onChange={(e) => onPartBGuessChangedC(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Left Side</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringD}
                      onChange={(e) => onPartBGuessChangedD(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Top</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringE}
                      onChange={(e) => onPartBGuessChangedE(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <label>Bottom</label>
                    <input
                      className="p-4 text-lg border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessStringF}
                      onChange={(e) => onPartBGuessChangedF(e.target.value)}
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

export default Q1;

/*
<div className="col-span-6">
                  <div className="text-center">
                    <label>Front</label>
                    <input
                      className="p-4 text-lg"
                      placeholder=""
                      value={partAguessStringA}
                      onChange={(e) => onPartAGuessChangedA(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <label>Back</label>
                    <input
                      className="p-4 text-lg"
                      placeholder=""
                      value={partAguessStringB}
                      onChange={(e) => onPartAGuessChangedB(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <label>Right Side</label>
                    <input
                      className="p-4 text-lg"
                      placeholder=""
                      value={partAguessStringC}
                      onChange={(e) => onPartAGuessChangedC(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <label>Left Side</label>
                    <input
                      className="p-4 text-lg"
                      placeholder=""
                      value={partAguessStringD}
                      onChange={(e) => onPartAGuessChangedD(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <label>Top</label>
                    <input
                      className="p-4 text-lg"
                      placeholder=""
                      value={partAguessStringE}
                      onChange={(e) => onPartAGuessChangedE(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <label>Bottom</label>
                    <input
                      className="p-4 text-lg"
                      placeholder=""
                      value={partAguessStringF}
                      onChange={(e) => onPartAGuessChangedF(e.target.value)}
                    />
                  </div>
                </div>

*/
/*
<div className="col-span-6">
                  <div className="text-center">
                    <label>A</label>
                    <input
                      className="p-4 text-lg"
                      placeholder=""
                      value={partBguessStringA}
                      onChange={(e) => onPartBGuessChangedA(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <label>B</label>
                    <input
                      className="p-4 text-lg"
                      placeholder=""
                      value={partBguessStringB}
                      onChange={(e) => onPartBGuessChangedB(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <label>C</label>
                    <input
                      className="p-4 text-lg"
                      placeholder=""
                      value={partBguessStringC}
                      onChange={(e) => onPartBGuessChangedC(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <label>D</label>
                    <input
                      className="p-4 text-lg"
                      placeholder=""
                      value={partBguessStringD}
                      onChange={(e) => onPartBGuessChangedD(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <label>E</label>
                    <input
                      className="p-4 text-lg"
                      placeholder=""
                      value={partBguessStringE}
                      onChange={(e) => onPartBGuessChangedE(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <label>F</label>
                    <input
                      className="p-4 text-lg"
                      placeholder=""
                      value={partBguessStringF}
                      onChange={(e) => onPartBGuessChangedF(e.target.value)}
                    />
                  </div>
                </div>

*/
