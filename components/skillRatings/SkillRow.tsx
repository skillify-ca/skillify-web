import React, { useState } from "react";
import { UserSkillsRatings } from "../../graphql/fetchUserSkillsRatings";
import SkillRatings from "../../pages/skillRatings";
import SkillRowEmoji from "./SkillRowEmoji";

export type SkillRowType = {
  skillId: String;
  sectionName: String;
  skillName: String;
  skillRating: Number;
};

export type SkillRowProps = {
  skillRow: SkillRowType;
};

export default function SkillRow({ skillRow }: SkillRowProps) {
  // todo: implement redux for state variables
  const [inputStudentRating, setInputStudentRating] = useState(
    skillRow.skillRating
  );
  const setInputStudentRatingCallback = (val: number) => {
    setInputStudentRating(val);
  };

  const renderEmojiByRating = (skillRating: Number) => {
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
    <div className="grid grid-cols-8 justify-center items-center text-center">
      <div className="w-1/2 h-1/2 bg-murkrow/50 rounded-full flex p-12 shadow-xl justify-center items-center text-center text-6xl">
        {renderEmojiByRating(inputStudentRating)}
      </div>
      <p className="col-start-2 col-span-3 text-xl">{skillRow.skillName}</p>
      <p className="text-xl">{inputStudentRating}</p>
      <SkillRowEmoji callback={setInputStudentRatingCallback} />
    </div>
  );
}
