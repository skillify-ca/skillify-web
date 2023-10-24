import React from "react";
import { useSelector } from "react-redux";
import {
  SkillRatingsRow,
  skillRatingsSelector,
} from "../../../redux/skillRatingsSlice";
import SkillRowEmoji from "./SkillRowEmoji";

export type SkillRowProps = {
  skillRow: SkillRatingsRow;
  isEditable: boolean;
};

export default function SkillRow({ skillRow, isEditable }: SkillRowProps) {
  const { skillRatings } = useSelector(skillRatingsSelector);
  const index = skillRatings.findIndex(
    (obj) => obj.userSkillId == skillRow.userSkillId
  );

  const renderEmojiByRating = (skillRating: number) => {
    if (skillRating == 0) {
      return "😶";
    } else if (skillRating < 30) {
      return "😐";
    } else if (skillRating < 60) {
      return "🙂";
    } else if (skillRating < 90) {
      return "😊";
    } else {
      return "🤩";
    }
  };

  return (
    <div className="grid justify-center w-full grid-cols-1 px-4 my-4 text-center shadow place-items-center bg-backgroundPrimary sm:grid-cols-6 rounded-xl">
      <div className="flex items-center justify-center p-4 text-5xl text-center rounded-full ">
        {renderEmojiByRating(skillRatings[index].studentRating)}
      </div>
      <p className="text-xl sm:col-span-3 sm:col-start-2">
        {skillRow.skillName}
      </p>
      <div className="flex items-center space-x-4 sm:col-span-2">
        <p className="text-xl">{skillRow.studentRating}</p>
        <SkillRowEmoji
          userSkillId={skillRow.userSkillId}
          studentRating={skillRow.studentRating}
          isEditable={isEditable}
        />
      </div>
    </div>
  );
}
