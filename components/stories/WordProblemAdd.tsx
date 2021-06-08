import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import {
  ItemContainerObj,
  Noun,
} from "../../pages/api/WordProblemModelObjects";
import { Button } from "./Button";
import { Input } from "./Input";

export interface WordProblemAddProp {
  autofocus?: boolean;
  submitGuess: (guess: GuessData) => void;
  question: Question;
}

/* Addition Word problems are made with a specific template. The template is as follows: (name) has an (itemContainer) of (itemType). 
Inside there are [randomNumber1] (item1.title) and [randomNumber2] (item2.title). How many (itemType) are in the (itemContainer)? */
export const WordProblemAdd: React.FC<WordProblemAddProp> = ({
  autofocus = true,
  submitGuess,
  question,
  ...props
}) => {
  const name = question.wordProblem.name;
  const itemContainer: ItemContainerObj = question.wordProblem.itemContainer;
  const noun1: Noun = question.wordProblem.item1;
  const noun2: Noun = question.wordProblem.item2;
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
      <div className="text-xl flex flex-wrap">
        <p className="align-left">
          {name} has a {itemContainer.singleTitle} of {noun1.type}. Inside,
          there are
          <span className={noun1.colour}>{" " + parse().first + " "}</span>
          {title(noun1, parse().first)} and
          <span className={noun2.colour}>{" " + parse().second + " "}</span>
          {title(noun2, parse().second)}. How many {noun1.type} are in the{" "}
          {itemContainer.singleTitle}?
        </p>
      </div>
      <div className="text-2xl flex flex-wrap justify-center w-full">
        <Input
          autoFocus={autofocus}
          guess={guess}
          setGuess={setGuess}
          handleKeypress={handleKeypress}
        />
      </div>
      <div className="flex flex-wrap mt-2 justify-center">
        <img src={noun1.image} width="60px" height="85px" />
        <img src={noun2.image} width="60px" height="85px" />
        <img src={noun1.image} width="60px" height="85px" />
        <img src={noun2.image} width="60px" height="85px" />
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
