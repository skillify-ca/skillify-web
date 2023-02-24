import React from "react";
import { useSelector } from "react-redux";
import {
  SkillRatingsRow,
  skillRatingsSelector,
} from "../../../../redux/skillRatingsSlice";
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
    <div className="grid items-center justify-center w-full grid-cols-1 text-center sm:grid-cols-8">
      <div className="flex items-center justify-center p-12 text-6xl text-center border-4 border-white rounded-full shadow-xl sm:w-1/2 h-1/2 bg-murkrow/50">
        {renderEmojiByRating(skillRatings[index].studentRating)}
      </div>
      <p className="text-xl sm:col-span-3 sm:col-start-2">
        {skillRow.skillName}
      </p>
      <p className="text-xl">{skillRow.studentRating}</p>
      <SkillRowEmoji
        userSkillId={skillRow.userSkillId}
        studentRating={skillRow.studentRating}
        isEditable={isEditable}
      />
    </div>
  );
}
