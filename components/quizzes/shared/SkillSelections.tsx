import React, { useState } from "react";
type SkillSelectionsProps = {
  selections: string[];
};

const SkillSelections: React.FC<SkillSelectionsProps> = ({ selections }) => {
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
        <div className="text-2xl font-bold text-black-600"></div>
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
export default SkillSelections;
