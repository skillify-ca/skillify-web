import React, { useState } from "react";

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
        <div className="font-bold text-2xl text-black-600"></div>
      </div>
      {selections.map((selection, index) => (
        <div
          key={index}
          className={`flex   items-start justify-start w-full px-4 py-2 my-2  cursor-pointer ${
            selected.includes(selection)
              ? "bg-violet-300 text-black-500 border-2 border-black-500 rounded-xl"
              : "bg-white text-black-600 border-2 border-black-500 rounded-xl"
          }`}
          onClick={() => handleSelection(selection)}
        >
          Input Text Selection {index + 1}
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
    <div className="relative w-full h-4 rounded-full bg-gray-300">
      <div
        className="absolute top-0 left-0 h-full rounded-full bg-violet-400"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

const QuizComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center place-content-center w-full px-4 py-8">
      <ProgressBar progress={50} />

      <div className="p-4 flex flex-col items-center space-y-2 ">
        <h1 className="text-2xl font-bold text-center">
          What industries are you interested in working?
        </h1>

        <p className="">Select 1-3 choices</p>
      </div>

      <SkillSelection
        selections={["One", "Two", "Three", "Four", "Five", "Six", "Seven"]}
      />
    </div>
  );
};

export default QuizComponent;
