import { type } from "node:os";
import React, { useState } from "react";
import {
  ItemContainerObj,
  noun,
} from "../../pages/api/WordProblemModelObjects";
import { Button } from "./Button";
import { Input } from "./Input";

export interface WordProblemAddProp {
  submitGuess: (guess: number) => void;
  question: string;
  name: string;
  itemContainer?: ItemContainerObj;
  noun1: noun;
  noun2: noun;
}

/* Addition Word problems are made with a specific template. The template is as follows: (name) has an (itemContainer) of (itemType). 
Inside there are [randomNumber1] (item1.title) and [randomNumber2] (item2.title). How many (itemType) are in the (itemContainer)? */
export const WordProblemAdd: React.FC<WordProblemAddProp> = ({
  submitGuess,
  question,
  name,
  itemContainer,
  noun1,
  noun2,
  ...props
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
    submitGuess(Number.parseInt(guess));
  };
  const parse = () => {
    const parts = question.split(" ");
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
          {name} has a {itemContainer.singleTitle} of {noun1.type}. Inside,
          there are
          <span className={noun1.colour}>{" " + parse().first + " "}</span>
          {title(noun1, parse().first)} and
          <span className={noun2.colour}>{" " + parse().second + " "}</span>
          {title(noun2, parse().second)}. How many {noun1.type} are in the{" "}
          {itemContainer.singleTitle}?
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
