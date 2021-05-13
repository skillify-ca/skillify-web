import React from "react";

const DiagnosticConclusion = () => {
  return (
    <div>
      <p> Report Card - Ontario Curriculum</p>
      <p> Average Grade Level - Grade 3 </p>
      <p className="mb-12"> Conclusion </p>
      <div className="flex justify-between w-1/4 border-b border-black p-2">
        <span> Topic: </span>
        <span className="pr-4"> Grade Level: </span>
      </div>
      <div className="flex justify-between flex-row w-1/4 p-2">
        <div>Addition Subtraction Division Multiplication</div>
        <div>Grade 3 Grade 3 Grade 3 Grade 3</div>
      </div>
    </div>
  );
};

export default DiagnosticConclusion;
