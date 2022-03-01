import React, { useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Button } from "../../ui/Button";

type Q6Props = {
  displayQuestion: string;
  nextQuestion: (guess: GuessData) => void;
  positions: boolean[][];
  setPositions: (positions: boolean[][]) => void;
  partBguessString: string;
  setpartBGuessString: (guessString: string) => void;
  partCguessString: string;
  setpartCGuessString: (guessString: string) => void;
  setupPosition: (xposition: number, yposition: number) => void;
};

//Future component, name: TypeAnswerQuestion
const Q6 = ({
  displayQuestion,
  nextQuestion,
  positions,
  setPositions,
  partBguessString,
  setpartBGuessString,
  partCguessString,
  setpartCGuessString,
  setupPosition,
}: Q6Props) => {
  const [guessString, setGuessString] = useState<string>("");

  //Base 1
  const partBanswer = "9 cm^2";
  //Base 2
  const partCanswer = "54 cm^2";

  const onPartBGuessChanged = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartBGuessString(newGuess);
  };

  const onPartCGuessChanged = (currentGuess: string) => {
    const newGuess = currentGuess;
    setpartCGuessString(newGuess);
  };

  const onSubmit = () => {
    setGuessString(JSON.stringify(positions));
    const guessStringLocal =
      JSON.stringify(positions) +
      "," +
      "B," +
      partBguessString +
      "," +
      "C," +
      partCguessString;
    const guess: GuessData = {
      guess: guessStringLocal,
      isCorrect: true,
    };
    //Pass this guessData object into nextQuestion
    nextQuestion(guess);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col gap-8 items-center">
        <p className="text-2xl text-center">{displayQuestion}</p>
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="md:col-span-12 rounded-xl">
            <div className="grid grid-cols-4 rounded-xl font-bold items-center justify-between bg-yellow-600 p-4">
              <div className="grid grid-cols-4 col-span-4 sm:col-span-4 rounded-xl font-bold justify-between bg-white p-4">
                <div className="col-span-4">
                  <div className="flex justify-between items-center">
                    <textarea
                      className={`w-16 h-16 border cursor-pointer rounded-lg border-black focus:shadow-outline ${
                        positions[0][0] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(0, 0)}
                    ></textarea>
                    <textarea
                      className={`w-16 h-16 border rounded-lg border-black focus:shadow-outline ${
                        positions[0][1] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(0, 1)}
                    ></textarea>
                    <textarea
                      className={`w-16 h-16 border rounded-lg border-black focus:shadow-outline ${
                        positions[0][2] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(0, 2)}
                    ></textarea>
                    <textarea
                      className={`w-16 h-16 border rounded-lg border-black focus:shadow-outline ${
                        positions[0][3] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(0, 3)}
                    ></textarea>
                  </div>
                  <div className="flex justify-between items-center">
                    <textarea
                      className={`w-16 h-16 border rounded-lg border-black focus:shadow-outline ${
                        positions[1][0] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(1, 0)}
                    ></textarea>
                    <textarea
                      className={`w-16 h-16 border rounded-lg border-black focus:shadow-outline ${
                        positions[1][1] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(1, 1)}
                    ></textarea>
                    <textarea
                      className={`w-16 h-16 border rounded-lg border-black focus:shadow-outline ${
                        positions[1][2] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(1, 2)}
                    ></textarea>
                    <textarea
                      className={`w-16 h-16 border rounded-lg border-black focus:shadow-outline ${
                        positions[1][3] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(1, 3)}
                    ></textarea>
                  </div>
                  <div className="flex justify-between items-center">
                    <textarea
                      className={`w-16 h-16 border rounded-lg border-black focus:shadow-outline ${
                        positions[2][0] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(2, 0)}
                    ></textarea>
                    <textarea
                      className={`w-16 h-16 border rounded-lg border-black focus:shadow-outline ${
                        positions[2][1] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(2, 1)}
                    ></textarea>
                    <textarea
                      className={`w-16 h-16 border rounded-lg border-black focus:shadow-outline ${
                        positions[2][2] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(2, 2)}
                    ></textarea>
                    <textarea
                      className={`w-16 h-16 border rounded-lg border-black focus:shadow-outline ${
                        positions[2][3] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(2, 3)}
                    ></textarea>
                  </div>
                  <div className="flex justify-between items-center">
                    <textarea
                      className={`w-16 h-16 border rounded-lg border-black focus:shadow-outline ${
                        positions[3][0] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(3, 0)}
                    ></textarea>
                    <textarea
                      className={`w-16 h-16 border rounded-lg border-black focus:shadow-outline ${
                        positions[3][1] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(3, 1)}
                    ></textarea>
                    <textarea
                      className={`w-16 h-16 border rounded-lg border-black focus:shadow-outline ${
                        positions[3][2] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(3, 2)}
                    ></textarea>
                    <textarea
                      className={`w-16 h-16 border rounded-lg border-black focus:shadow-outline ${
                        positions[3][3] === true ? `bg-green-500` : `bg-white`
                      }`}
                      onClick={() => setupPosition(3, 3)}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="md:col-span-12 rounded-xl">
            <div className="grid grid-cols-12 rounded-xl font-bold items-center justify-between bg-yellow-600 p-4">
              <div className="grid grid-cols-12 col-span-12 sm:col-span-6 rounded-xl font-bold justify-between bg-white p-4">
                <p className="col-span-12 text-center">
                  b) If each side of a cube is 3m long, what is the area of one
                  face of the cube
                </p>
                <div className="col-span-12">
                  <div className="flex gap-4 justify-between items-center">
                    <label>Answer</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partBguessString}
                      onChange={(e) => onPartBGuessChanged(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 col-span-12 sm:col-span-6 rounded-xl font-bold justify-between bg-white p-4">
                <p className="col-span-12 text-center">
                  c) What is the surface area of the cube?
                </p>
                <div className="col-span-12">
                  <div className="flex gap-4 justify-between items-center">
                    <label>Answer</label>
                    <input
                      className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                      placeholder=""
                      value={partCguessString}
                      onChange={(e) => onPartCGuessChanged(e.target.value)}
                    />
                  </div>
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
    </React.Fragment>
  );
};

export default Q6;
