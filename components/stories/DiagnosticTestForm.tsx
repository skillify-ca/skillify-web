import React, { useRef, useState } from "react";
import { Topic } from "../../pages/api/skill";
import { Button } from "./Button";
import Toggle from "./Toggle";

type DiagnosticTestFormProps = {
  onClick: (topics: Topic[]) => void;
};

const DiagnosticTestForm = ({ onClick }: DiagnosticTestFormProps) => {
  const [topics, setTopics] = useState([]);
  const [grade, setGrade] = useState(1);

  const toggle = (topic) => {
    if (topics.includes(topic)) {
      setTopics(topics.filter((it) => it !== topic));
    } else {
      let newTopics = [];
      newTopics.push(topic);
      newTopics.push(...topics);
      setTopics(newTopics);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-4">
      <p className="text-xl font-bold mb-8">Diagnostic Test</p>

      <div className="grid grid-cols-2 w-full gap-4 mb-8">
        <p className="text-sm font-bold text-gray-700">Topics</p>

        <div className="flex flex-col">
          <div className="flex gap-4">
            <Toggle onClick={() => toggle(Topic.ADDITION)} />
            <p>Addition</p>
          </div>
          <div className="flex gap-4">
            <Toggle onClick={() => toggle(Topic.SUBTRACTION)} />
            <p>Subtraction</p>
          </div>
          <div className="flex gap-4">
            <Toggle onClick={() => toggle(Topic.MULTIPLICATION)} />
            <p>Multiplication</p>
          </div>
          <div className="flex gap-4">
            <Toggle onClick={() => toggle(Topic.DIVISION)} />
            <p>Division</p>
          </div>
        </div>
      </div>

      <Button
        backgroundColor="blue"
        label="Start"
        textColor="white"
        onClick={(e) => onClick(topics)}
      />
    </div>
  );
};

export default DiagnosticTestForm;
