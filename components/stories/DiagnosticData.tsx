import React from "react";
import { Topic } from "../../pages/api/questionGenerator";

type DiagnosticDataProps = {
  questions: Array<string>;
  guessAns: Array<string>;
  topic: Array<string>;
  onClick: () => void;
};

const DiagnosticData = ({
  questions,
  guessAns,
  topic,
  onClick,
}: DiagnosticDataProps) => {
  let skillTopic;
  if (topic[0] == Topic.ADDITION) {
    skillTopic = Topic.ADDITION.toString();
  } else if (topic[0] == Topic.SUBTRACTION) {
    skillTopic = Topic.SUBTRACTION.toString();
  } else if (topic[0] == Topic.MULTIPLICATION) {
    skillTopic = Topic.MULTIPLICATION.toString();
  } else if (topic[0] == Topic.DIVISION) {
    skillTopic = Topic.DIVISION.toString();
  } else {
    skillTopic = "";
  }
  return (
    <>
      <p className="mb-12"> Diagnostic Report : {skillTopic} </p>
      <div className="flex justify-between w-1/4 border-b border-black p-2">
        <span> Question: </span>
        <span className="pr-6"> Guess: </span>
      </div>
      <div className="flex justify-between flex-row w-1/4 p-2">
        <div>
          {questions.map((q) => (
            <div>{q}</div>
          ))}
        </div>
        <div>
          {guessAns.map((ans) => (
            <div>{ans}</div>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <button
          className="items-end bg-blue-500 rounded p-3 text-white text-sm"
          onClick={(e) => onClick()}
        >
          See Evidence
        </button>
      </div>
    </>
  );
};

export default DiagnosticData;
