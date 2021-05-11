import React from "react";

type DiagnosticDataProps = {
  questions: Array<string>;
};

const DiagnosticData = ({ questions }: DiagnosticDataProps) => {
  return (
    <div>
      Question:
      {questions.map((q) => (
        <div>{q}</div>
      ))}
    </div>
  );
};

export default DiagnosticData;
