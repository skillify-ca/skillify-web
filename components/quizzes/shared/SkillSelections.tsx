import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../../ui/Button";
import Progress from "./Progress";
import SkillifyNavbar from "./SkillifyNavbar";

type SkillSelectionsProps = {
  selections: string[];
  setStageResponses: Dispatch<SetStateAction<any[]>>;
  currentStage: number;
  onNextClick: () => void;
  onBackClick: () => void;
  progress: number;
  title: string;
  body: string;
};

const SkillSelections: React.FC<SkillSelectionsProps> = ({
  selections,
  setStageResponses,
  currentStage,
  onNextClick,
  onBackClick,
  progress,
  title,
  body,
}) => {
  const [selected, setSelected] = useState([]);
  const handleSelection = (selection: string) => {
    if (selected.includes(selection)) {
      setSelected(selected.filter((s) => s !== selection));
    } else {
      setSelected([...selected, selection]);
    }
  };

  const handleStage = () => {
    setStageResponses((prev) => [...prev, (prev[currentStage] = selected)]);
    //setSelected([]);
  };

  return (
    <>
      <div>{JSON.stringify(selected)}</div>
      <SkillifyNavbar hidden={false} onBackClick={onBackClick} />
      <div className="flex flex-col items-center px-8">
        <Progress progress={progress} />
        <div className="mt-4 text-2xl font-bold text-center text-black-600">
          {title}
        </div>
        <div className="text-lg font-semibolds px-3">{body}</div>
        <div className="flex flex-col w-full max-w-4xl mx-auto">
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
        <div className="mt-4">
          <Button
            label="Next"
            onClick={() => {
              handleStage();
              onNextClick();
            }}
            backgroundColor="yellow"
          />
        </div>
      </div>
    </>
  );
};
export default SkillSelections;
