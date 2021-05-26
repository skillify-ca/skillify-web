import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { getRndColour } from "../../pages/api/random";
import { Button } from "./Button";
import { Input } from "./Input";

export interface MultiplicationArrayProp {
  question: Question;
  submitGuess: (guess: GuessData) => void;
  colour?: string;
}

// Array Question type is a new way to visualize multiplication problem using squares
// Size restriction is 5 x 5 for now
export const MultiplicationArray: React.FC<MultiplicationArrayProp> = ({
  question,
  submitGuess,
  colour = "green",
  ...props
}) => {
  const [visibility, setVisibility] = useState(false);
  const [guess, setGuess] = useState("");
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    setGuess("");
    submitGuess({ guess: guess, isCorrect: guess === question.answer });
  };
  const parse = () => {
    const parts = question.text.split(" ");
    return {
      first: parts[0],
      second: parts[2],
    };
  };
  let horizontal = Array.from(Array(Number.parseInt(parse().second)).keys());
  let columns = Array.from(Array(Number.parseInt(parse().first)).keys());

  //let hoverColour = "hover:bg-" + colour + "-400";
  let hoverColour;
  switch (colour) {
    case "red":
      hoverColour = "bg-red-400";
    case "purple":
      hoverColour = "bg-purple-400";
    case "yellow":
      hoverColour = "bg-yellow-400";
    case "blue":
      hoverColour = "bg-blue-400";
    case "green":
      hoverColour = "bg-green-400";
  }
  let nonHoverColour = "bg-green-700";
  let borderColour = "border-green-900";
  let textColour = "text-green-500";
  return (
    <div>
      <div className="flex flex-col gap-2 items-center">
        {horizontal.map((it) => (
          <div className="flex flew-row gap-2">
            {columns.map((it) => (
              <div
                className={`w-8 h-8 border-gray-50 border-1 hover:gap-1 hover:scale-125 transform hover:${hoverColour} ${nonHoverColour}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className={`mt-1 border-b-8 ${borderColour}`}></div>
        <div className={`text-3xl flex-col text-center ${textColour}`}>
          {parse().first} x {parse().second}
        </div>
        <Input
          guess={guess}
          setGuess={setGuess}
          handleKeypress={handleKeypress}
        />
        <Button
          onClick={onSubmit}
          label="Submit"
          backgroundColor="blue"
          textColor="white"
        />
      </div>
    </div>
  );
};
