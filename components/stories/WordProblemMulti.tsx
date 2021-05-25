import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import {
  ItemContainerObj,
  Noun,
} from "../../pages/api/WordProblemModelObjects";
import { Button } from "./Button";
import { Input } from "./Input";

export interface WordProblemMultiProp {
  submitGuess: (guess: GuessData) => void;
  question: Question;
}

/**
 * The Multipolication Word problem follows a specific template and is as follows:
 * (name) has a (randomNumber1)(itemContainer). Each (itemContainer) has (randomNumber2) (noun.title).
 * How many (noun.title) does (name) have in total?
 */
export const WordProblemMulti: React.FC<WordProblemMultiProp> = ({
  submitGuess,
  question,
  ...props
}) => {
  const name = question.wordProblem.name;
  const itemContainer: ItemContainerObj = question.wordProblem.itemContainer;
  const noun1: Noun = question.wordProblem.item1;

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
  const title = (noun, number) => {
    if (number == "1") {
      return noun.singleTitle;
    }
    return noun.pluralTitle;
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-2xl flex flex-wrap">
        <p className="align-left">
          {name} has
          <span> </span>
          <span className="border-2 border-black border-opacity-75 md:border-opacity-50 text-black font-extrabold">
            {" " + parse().first}
          </span>
          {" " + title(itemContainer, parse().first)}. Each{" "}
          {itemContainer.singleTitle} has
          <span className={noun1.colour}>
            {" " + parse().second + " "}
          </span>{" "}
          {title(noun1, parse().second)}. How many {noun1.pluralTitle} does{" "}
          {name} have in total?
        </p>
      </div>
      <div className="text-2xl flex flex-wrap">
        <Input
          guess={guess}
          setGuess={setGuess}
          handleKeypress={handleKeypress}
        />
      </div>
      <div className="flex flex-wrap mt-2">
        <img src={noun1.image} width="60px" height="85px" />
        <img src={noun1.image} width="60px" height="85px" />
        <img src={noun1.image} width="60px" height="85px" />
        <img src={noun1.image} width="60px" height="85px" />
        <img src={noun1.image} width="60px" height="85px" />
      </div>
      <Button
        onClick={onSubmit}
        label="Submit"
        backgroundColor="blue"
        textColor="white"
      />
    </div>
  );
};
