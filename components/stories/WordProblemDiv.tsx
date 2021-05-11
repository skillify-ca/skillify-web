import React, { useState } from "react";
import { Question } from "../../pages/api/questionGenerator";
import { Noun } from "../../pages/api/WordProblemModelObjects";
import { Button } from "./Button";
import { Input } from "./Input";

export interface WordProblemDivProp {
  submitGuess: (e) => void;
  question: Question;
}

/**
 * The Division Word problem follows a specific template and is as follows:
 * (name) has a (randomNumber2)(noun.title) and (randomNumber1) friends. (name) wants to share the (noun.title) equally between
 * their (randomNumber1) friends. How many (noun.title) will each friend have?
 */
export const WordProblemDiv: React.FC<WordProblemDivProp> = ({
  submitGuess,
  question,
  ...props
}) => {
  const name = question.wordProblem.name;
  const noun1: Noun = question.wordProblem.item1;
  const [guess, setGuess] = useState("");
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      submitGuess(e);
    }
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
          {name} has
          <span className={noun1.colour}>
            {" " + parse().first}
            {" " + title(noun1, parse().second) + " "}{" "}
          </span>
          <span> and </span>
          <span className="text-black font-extrabold">
            {parse().second + " friends"}.
          </span>
          {" " + name} wants to share the {title(noun1, parse().first) + " "}
          equally between them. How many
          <span className={noun1.colour}>
            {" " + title(noun1, parse().first) + " "}
          </span>
          will each friend have?
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
        onClick={submitGuess}
        label="Submit"
        backgroundColor="blue"
        textColor="white"
      />
    </div>
  );
};
