import React from "react";

type DiagnosticDataProps = {
  questions: Array<string>;
  guessAns: Array<string>;
  topic: Array<number>;
};

const DiagnosticData = ({
  questions,
  guessAns,
  topic,
}: DiagnosticDataProps) => {
  let skillTopic;
  if (topic[0] == 1) {
    skillTopic = "Addition";
  } else if (topic[0] == 2) {
    skillTopic = "Subtraction";
  } else if (topic[0] == 3) {
    skillTopic = "Multiplication";
  } else if (topic[0] == 4) {
    skillTopic = "Division";
  } else {
    skillTopic = "";
  }

  return (
    <>
      <p className="mb-12"> {skillTopic} Diagnostic Report </p>
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
    </>
  );
};

export default DiagnosticData;
