import moment from "moment";
import React, { useState } from "react";
import PageHeader from "../../../components/ui/PageHeader";

type SkillSelectionProps = {
  selections: string[];
};

const SkillSelection: React.FC<SkillSelectionProps> = ({ selections }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelection = (selection: string) => {
    if (selected.includes(selection)) {
      setSelected(selected.filter((s) => s !== selection));
    } else {
      setSelected([...selected, selection]);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto p-4">
      <div className="w-full mb-4 text-center">
        <div className="font-bold text-2xl text-black-600">
          Select 1-3 choices
        </div>
      </div>
      {selections.map((selection, index) => (
        <div
          key={index}
          className={`flex items-center justify-center w-full px-4 py-2 my-2 rounded-lg cursor-pointer ${
            selected.includes(selection)
              ? "bg-violet-300 text-black-500 border-8 border-violet-500 rounded-lg"
              : "bg-white text-black-600 border-4 border-black-800 rounded-lg"
          }`}
          onClick={() => handleSelection(selection)}
        >
          Input Text Selection {index + 1} Click Here
        </div>
      ))}
    </div>
  );
};

type ProgressBarProps = {
  progress: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="relative w-full h-4 rounded-full bg-gray-300 mb-4">
      <div
        className="absolute top-0 left-0 h-full rounded-full bg-blue-400"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

const QuizComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-8">
      <ProgressBar progress={50} />
      <PageHeader
        title={`What industries are you interested in working?`}
        description={moment().format("MMM Do YYYY")}
        titleClassName="text-black-600"
      />
      <SkillSelection
        selections={["One", "Two", "Three", "Four", "Five", "Six", "Seven"]}
      />
    </div>
  );
};

export default QuizComponent;
