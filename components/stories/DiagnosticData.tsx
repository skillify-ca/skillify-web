import React from "react";

type DiagnosticDataProps = {
  questions: Array<string>;
  guessAns: Array<string>;
};

const DiagnosticData = ({ questions, guessAns }: DiagnosticDataProps) => {
  console.log(guessAns);
  return (
    <>
      <p className="mb-12"> Diagnostic Report </p>
      <div className="flex justify-between flex-row w-1/4">
        <div>
          Question:
          {questions.map((q) => (
            <div>{q}</div>
          ))}
        </div>
        <div>
          Guess:
          {guessAns.map((q) => (
            <div>{q}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DiagnosticData;
