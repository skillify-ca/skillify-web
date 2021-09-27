import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { Button } from "../ui/Button";
import { EqualGroupsInput } from "./EqualGroupsInput";

export interface MultiplicationEqualGroupsProp {
  question: Question;
  color: 0 | 1 | 2 | 3; // color is a random number between 0 - 3
  submitGuess: (guess: GuessData) => void;
  isReadOnly?: boolean;
}

/* Multiplication by equal groups UI with 2 inputs */
export const MultiplicationEqualGroups: React.FC<MultiplicationEqualGroupsProp> = ({
  question,
  color,
  submitGuess,
  isReadOnly = false,
}) => {
  const [guess, setGuess] = useState("");
  const [guess2, setGuess2] = useState("");

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    setGuess("");
    setGuess2("");
    const parts = question.text.split(" ");
    submitGuess({
      guess: guess + " groups of " + guess2,
      isCorrect:
        guess === parts[0] &&
        guess2 === parts[2] &&
        (Number.parseInt(guess) * Number.parseInt(guess2)).toString() ===
          question.answer,
    });
  };
  const parse = () => {
    const parts = question.text.split(" ");
    return {
      first: parts[0],
      second: parts[2],
    };
  };
  let groups = Array.from(Array(Number.parseInt(parse().first)).keys());
  let itemsInGroup = Array.from(Array(Number.parseInt(parse().second)).keys());

  const getColors = (color) => {
    let groupColor;
    let itemColor;

    switch (color) {
      case 0:
        groupColor = "bg-blue-300";
        itemColor = "bg-purple-600";
        break;
      case 1:
        groupColor = "bg-yellow-300";
        itemColor = "bg-pink-600";
        break;
      case 2:
        groupColor = "bg-green-300";
        itemColor = "bg-pink-600";
        break;
      case 3:
        groupColor = "bg-pink-300";
        itemColor = "bg-purple-600";
        break;
    }
    return { groupColor, itemColor };
  };

  const isOrAre = (length: number) => {
    let isOrAre;
    if (length > 1) {
      isOrAre = "are";
    } else {
      isOrAre = "is";
    }
    return <p> {isOrAre} </p>;
  };

  const singularPlural = (length: number) => {
    let group;
    if (length > 1) {
      group = "groups";
    } else {
      group = "group";
    }
    return <p> {group} </p>;
  };

  return (
    <div className="flex flex-col justify-between items-center w-full h-full">
      <div className="flex flex-row w-full flex-wrap gap-1 justify-around items-center">
        {groups.map((it) => (
          <div
            className={`flex flew-row flex-wrap items-center justify-center gap-1 ${
              getColors(color).groupColor
            } w-24 h-24 p-4 rounded-full`}
          >
            {itemsInGroup.map((it) => (
              <div
                className={`flex ${
                  getColors(color).itemColor
                } h-1/4 w-1/4 border-black rounded-3xl hover:gap-1 ${
                  getColors(color).itemColor
                } hover:scale-125 transform`}
              ></div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-row flex-wrap gap-2 justify-center mt-4 text-md">
        There {isOrAre(groups.map((it) => it).length)}
        <EqualGroupsInput
          autofocus={true}
          guess={guess}
          setGuess={setGuess}
          handleKeypress={handleKeypress}
        />
        {singularPlural(groups.map((it) => it).length)} of
        <EqualGroupsInput
          autofocus={false}
          guess={guess2}
          setGuess={setGuess2}
          handleKeypress={handleKeypress}
        />
      </div>
      <div className="text-sm mt-4">
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
