import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";

//Future component, name: TypeAnswerQuestion
const Q6 = (displayQuestion, nextQuestion, isWrong) => {
  const [guessString, setGuessString] = useState<string>("");
  const [positions, setPositions] = useState<boolean[][]>([
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ]);

  const onSubmit = () => {
    setGuessString(JSON.stringify(positions));
    const guessStringLocal = JSON.stringify(positions);
    const guess: GuessData = {
      guess: guessStringLocal,
      isCorrect: true,
    };
    //Pass this guessData object into nextQuestion
    nextQuestion(guess);
  };

  const setupPosition = (xposition: number, yposition: number) => {
    setPositions((prev) => {
      const next = [...prev];
      next[xposition][yposition] = !next[xposition][yposition];
      return next;
    });
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
