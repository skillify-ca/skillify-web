import React, { useState } from "react";
<<<<<<<< HEAD:components/quizzes/langQuiz/SkillSelections.tsx

type skillSelectionProps = {
  selections: string[];
};

const skillSelection: React.FC<skillSelectionProps> = ({ selections }) => {
========
type SkillSelectionsProps = {
  selections: string[];
};

const SkillSelections: React.FC<SkillSelectionsProps> = ({ selections }) => {
>>>>>>>> main:components/quizzes/SkillSelections.tsx
  const [selected, setSelected] = useState<string[]>([]);
  const handleSelection = (selection: string) => {
    if (selected.includes(selection)) {
      setSelected(selected.filter((s) => s !== selection));
    } else {
      setSelected([...selected, selection]);
    }
  };
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto">
      <div className="w-full mb-4 text-center">
        <div className="font-bold text-2xl text-black-600"></div>
      </div>
      {selections.map((selection, index) => (
        <div
          key={index}
          className={`flex items-start justify-start w-full px-4 py-2 my-2 cursor-pointer ${
            selected.includes(selection)
              ? "bg-violet-300 text-black-500 border-2 border-black-500 rounded-xl"
              : "bg-white text-black-600 border-2 border-black-500 rounded-xl"
          }`}
          onClick={() => handleSelection(selection)}
        >
          {selections[index]}
        </div>
      ))}
    </div>
  );
};
<<<<<<<< HEAD:components/quizzes/langQuiz/SkillSelections.tsx
export default skillSelection;
========
export default SkillSelections;
>>>>>>>> main:components/quizzes/SkillSelections.tsx
