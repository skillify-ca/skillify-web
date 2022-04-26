import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export interface MultiplicationArrayProp {
  question: Question;
  submitGuess: (guess: GuessData) => void;
  colour: "red" | "purple" | "blue" | "green" | "yellow";
  isReadOnly?: boolean;
}

// Array Question type is a new way to visualize multiplication problem using squares
// Size restriction is 5 x 5 for now
export const MultiplicationArray: React.FC<MultiplicationArrayProp> = ({
  question,
  submitGuess,
  colour,
  isReadOnly = false,
}) => {
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

  const getColourStyles = () => {
    let colorStyle;
    let borderColour = "border-green-900";
    let textColour = "text-green-500";
    let hoverColour = "hover:bg-green-400";
    switch (colour) {
      case "red":
        colorStyle = "bg-red-700";
        borderColour = "border-red-900";
        textColour = "text-red-500";
        hoverColour = "hover:bg-red-400";
        break;
      case "purple":
        colorStyle = "bg-purple-700";
        borderColour = "border-purple-900";
        textColour = "text-purple-500";
        hoverColour = "hover:bg-purple-400";
        break;
      case "yellow":
        colorStyle = "bg-yellow-700";
        borderColour = "border-yellow-900";
        textColour = "text-yellow-500";
        hoverColour = "hover:bg-yellow-400";
        break;
      case "blue":
        colorStyle = "bg-blue-700";
        borderColour = "border-blue-900";
        textColour = "text-blue-500";
        hoverColour = "hover:bg-blue-400";
        break;
      case "green":
        colorStyle = "bg-green-700";
        borderColour = "border-green-900";
        textColour = "text-green-500";
        hoverColour = "hover:bg-green-400";
        break;
    }
    return { colorStyle, borderColour, textColour, hoverColour };
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        {horizontal.map((it) => (
          <div className="flex gap-2 flew-row">
            {columns.map((it) => (
              <div
                className={`${getColourStyles().colorStyle} ${
                  getColourStyles().hoverColour
                } w-8 h-8 border-gray-50 border-1 hover:gap-1 hover:scale-125 transform`}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div
          className={`mt-1 border-b-8 ${getColourStyles().borderColour}`}
        ></div>
        <div
          className={`text-3xl flex-col text-center ${
            getColourStyles().textColour
          }`}
        >
          {parse().first} x {parse().second}
        </div>
        {!isReadOnly && (
          <Input
            value={guess}
            setValue={setGuess}
            handleKeypress={handleKeypress}
          />
        )}
        {!isReadOnly && (
          <Button
            onClick={onSubmit}
            label="Submit"
            backgroundColor="blue"
            textColor="white"
          />
        )}
      </div>
    </div>
  );
};
