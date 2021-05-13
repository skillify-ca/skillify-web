import React from "react";

const DiagnosticConclusion = () => {
  return (
    <div>
      <p> Report Card - Ontario Curriculum</p>
      <p> Average Grade Level - Grade 3 </p>
      <p className="mb-6"> Conclusion </p>
      <div className="flex justify-between border-b border-black p-2">
        <span> Topic: </span>
        <span className="pr-4"> Grade Level: </span>
      </div>
      <div className="flex flex-row justify-between p-2">
        <div>
          <h5 className="border-red-500 border-2 mb-2">Addition</h5>
          <h5 className="border-blue-500 border-2 mb-2">Subtraction</h5>
          <h5 className="border-yellow-500 border-2 mb-2">Division</h5>
          <h5 className="border-green-500 border-2 mb-2">Multiplication</h5>
        </div>
        <div>
          <h5 className="mb-3">Grade 3</h5>
          <h5 className="mb-3">Grade 3</h5>
          <h5 className="mb-3">Grade 3</h5>
          <h5 className="mb-3">Grade 3</h5>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold border-b border-black">
          Worksheet Recommendations
        </span>
        <a
          href="/worksheets/multiplication_worksheet.pdf"
          target="_blank"
          className="mt-2 text-blue-500"
        >
          Worksheet#1
        </a>
        <a
          href="/worksheets/addition_and_subtraction_worksheet.pdf"
          target="_blank"
          className="mt-2 text-blue-500"
        >
          Worksheet#2
        </a>
      </div>
    </div>
  );
};

export default DiagnosticConclusion;
