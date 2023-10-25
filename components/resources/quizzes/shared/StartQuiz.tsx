import React from "react";
import { Button } from "../../../ui/Button";
import { UserInput } from "./types";

type StartQuizProps = {
  onNextClick: () => void;
  title: string;
  body: string;
  userInput: UserInput;
  setUserInput: (userInput: UserInput) => void;
};

const StartQuiz = ({
  onNextClick,
  body,
  title,
  userInput,
  setUserInput,
}: StartQuizProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  return (
    <div className="w-full space-y-4 ">
      <div className="flex justify-center p-4 ml-16 "></div>
      <div className="flex flex-col items-center px-4 space-y-6 text-center">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="px-4 text-xl font-medium">{body}</p>
        <div className="space-y-2 text-xl text-left">
          <h3 className="ml-8">What should we call you?</h3>{" "}
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={userInput.name}
            onChange={handleInputChange}
            className="w-4/5 p-2 ml-8 border border-gray-500 rounded-lg shadow appearance-none"
          ></input>
          <h3 className="ml-8">Where should we send your results?</h3>{" "}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userInput.email}
            onChange={handleInputChange}
            className="w-4/5 p-2 ml-8 border border-gray-500 rounded-lg shadow appearance-none"
          ></input>
        </div>
        <Button
          backgroundColor="yellow"
          label="Start Quiz"
          disabled={userInput.name.length == 0 && userInput.email.length == 0}
          onClick={() => {
            onNextClick();
          }}
        />
      </div>
    </div>
  );
};

export default StartQuiz;
