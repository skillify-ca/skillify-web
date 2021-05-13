import Link from "next/link";
import React from "react";
import { Topic } from "../../pages/api/questionGenerator";
type DiagnosticConclusionProps = {
  topics: Array<Topic>;
};

const DiagnosticConclusion = ({ topics }: DiagnosticConclusionProps) => {
  return (
    <div>
      <p className="mb-2 text-center font-black"> Conclusion </p>
      <p> Report Card - Ontario Curriculum</p>
      <p className="mb-2"> Average Grade Level - Grade 3 </p>
      <div className="flex justify-between border-b border-black p-2">
        <span> Topic: </span>
        <span className="pr-4"> Grade Level: </span>
      </div>
      <div className="flex flex-row justify-between p-2">
        <div>
          {topics.map((it) => (
            <p className="border-green-400 border-2 mb-2">{it}</p>
          ))}
        </div>
        <div>
          {topics.map((it) => (
            <p className="border-blue-500 border-2 mb-2">Grade 3</p>
          ))}
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
      <Link href="/diagnostic/evidence">
        <button className="items-end bg-blue-500 rounded p-3 text-white text-sm">
          See Evidence
        </button>
      </Link>
    </div>
  );
};

export default DiagnosticConclusion;
