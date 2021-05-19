import React, { useRef, useState } from "react";
import { Topic } from "../../pages/api/skill";
import { Button } from "./Button";
import { Input } from "./Input";
import Toggle from "./Toggle";

type DiagnosticTestFormProps = {
  onClick: (grade: string) => void;
};

const DiagnosticTestForm = ({ onClick }: DiagnosticTestFormProps) => {
  const [grade, setGrade] = useState("Grade 3");

  const onGradeChange = (e: any) => {
    setGrade(e.target.value);
  };
  return (
    <div className="flex flex-col items-center bg-white gap-8 rounded-lg p-4">
      <p className="text-xl font-bold">Diagnostic Test</p>
      <p>
        This FREE diagnostic tests helps you discover your child's level in
        math. Find out exactly where they have gaps (if any).
      </p>
      <p>
        At the end of the test we provide you with personalized resources to
        help your child get better at math no matter what level they are at.
      </p>
      <div className="flex flex-row items-center justify-center w-full gap-4 mb-8">
        <p className="font-bold text-gray-700">Grade</p>
        <div className="relative inline-flex">
          <svg
            className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 412 232"
          >
            <path
              d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
              fill="#648299"
              fill-rule="nonzero"
            />
          </svg>
          <select
            value={grade}
            onChange={onGradeChange}
            className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          >
            <option>Grade 1</option>
            <option>Grade 2</option>
            <option>Grade 3</option>
          </select>
        </div>
      </div>

      <Button
        backgroundColor="blue"
        label="Start"
        textColor="white"
        onClick={(e) => onClick(grade)}
      />
    </div>
  );
};

export default DiagnosticTestForm;
