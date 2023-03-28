import React, { Dispatch, SetStateAction } from "react";
import { Button } from "../../../ui/Button";
import Progress from "./Progress";
import SkillifyNavbar from "./SkillifyNavbar";

type SkillSelectionsProps = {
  selections: string[];
  selected: string[][];
  setSelected: Dispatch<SetStateAction<string[][]>>;
  setQuizResponses: Dispatch<SetStateAction<any[]>>;
  currentStage: number;
  onNextClick: () => void;
  onBackClick: () => void;
  progress: number;
  title: string;
  body: string;
};

const SkillSelections: React.FC<SkillSelectionsProps> = ({
  selections,
  selected,
  setSelected,
  setQuizResponses,
  currentStage,
  onNextClick,
  onBackClick,
  progress,
  title,
  body,
}) => {
  const currentSelections = selected[currentStage] || [];

  const handleSelection = (selection: string) => {
    const selectionIndex = currentSelections.indexOf(selection);
    if (selectionIndex !== -1) {
      setSelected((prev) => {
        const updatedSelections = [...prev];
        updatedSelections[currentStage] = currentSelections.filter(
          (s, index) => index !== selectionIndex
        );
        return updatedSelections;
      });
    } else {
      setSelected((prev) => {
        const updatedSelections = [...prev];
        updatedSelections[currentStage] = [...currentSelections, selection];
        return updatedSelections;
      });
    }
  };

  const handleStage = () => {
    setQuizResponses((prev) => {
      const updatedResponses = [...prev];
      updatedResponses[currentStage - 1] = selected[currentStage];
      return updatedResponses;
    });
    setSelected((prev) => {
      const updatedSelections = [...prev];
      return updatedSelections;
    });
  };

  return (
    <>
      <SkillifyNavbar hidden={false} onBackClick={onBackClick} />
      <div className="flex flex-col items-center px-8">
        <Progress progress={progress} />
        <div className="mt-4 text-2xl font-bold text-center text-black-600">
          {title}
        </div>
        <div className="text-lg font-semibolds px-3">{body}</div>
        <div className="flex flex-col w-full max-w-4xl mx-auto">
          {selections.map((selection, index) => {
            const isSelected = currentSelections.includes(selection);
            const className = [
              "flex",
              "items-start",
              "justify-start",
              "w-full",
              "px-4",
              "py-2",
              "my-2",
              "cursor-pointer",
              "text-black-600",
              "border-2",
              "border-black-500",
              "rounded-xl",
              isSelected ? "bg-violet-300" : "bg-white",
            ].join(" ");
            return (
              <div
                key={index}
                className={className}
                onClick={() => handleSelection(selection)}
              >
                {selection}
              </div>
            );
          })}
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
