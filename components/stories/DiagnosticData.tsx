import React from "react";

type DiagnosticDataProps = {
  questions: Array<string>;
  guessAns: Array<string>;
  onClick: () => void;
};

const DiagnosticData = ({
  questions,
  guessAns,
  onClick,
}: DiagnosticDataProps) => {
  return (
    <>
      <p className="mb-12"> Diagnostic Report </p>
      <div className="flex justify-between w-1/4 border-b border-black p-2">
        <span> Question: </span>
        <span className="pr-4"> Guess: </span>
      </div>
      <div className="flex justify-between flex-row w-1/4 p-2">
        <div>
          {questions.map((q) => (
            <div>{q}</div>
          ))}
        </div>
        <div>
          {guessAns.map((q) => (
            <div>{q}</div>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <button
          className="items-end bg-blue-500 rounded p-3 text-white text-sm"
          onClick={(e) => onClick()}
        >
          Go To Conclusion
        </button>
      </div>
    </>
  );
};

export default DiagnosticData;
