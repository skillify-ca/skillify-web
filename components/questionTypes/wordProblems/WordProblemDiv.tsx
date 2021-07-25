import React, { useState } from "react";
import { Question } from "../../../pages/api/question";
import { Noun } from "../../../pages/api/WordProblemModelObjects";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";

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
  const title = (noun, number, closingQuanity) => {
    if (number > 1 && closingQuanity === true) {
      return noun.pluralTitle;
    }
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
            {" " + title(noun1, parse().first, false) + " "}{" "}
          </span>
          <span> and </span>
          <span className="text-black font-extrabold">
            {parse().second + " friend(s)"}.
          </span>
          {" " + name} wants to share the{" "}
          {title(noun1, parse().first, false) + " "}
          equally between them. How many
          <span className={noun1.colour}>
            {" " + title(noun1, parse().first, true) + " "}
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
        onClick={onSubmit}
        label="Submit"
        backgroundColor="blue"
        textColor="white"
      />
    </div>
  );
};
