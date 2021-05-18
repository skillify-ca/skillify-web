import React, { useRef, useState } from "react";
import { Topic } from "../../pages/api/skill";
import { Button } from "./Button";
import { Input } from "./Input";
import Toggle from "./Toggle";

type DiagnosticTestFormProps = {
  onClick: (grade: string) => void;
};

const DiagnosticTestForm = ({ onClick }: DiagnosticTestFormProps) => {
  const [grade, setGrade] = useState("3");

  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-4">
      <p className="text-xl font-bold mb-8">Diagnostic Test</p>

      <div className="flex flex-row items-center w-full gap-4 mb-8">
        <p className="text-xl font-bold text-gray-700">Grade</p>
        <Input guess={grade} setGuess={setGrade} />
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
