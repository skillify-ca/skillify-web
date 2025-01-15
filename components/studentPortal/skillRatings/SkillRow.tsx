import React from "react";

import { UserSkillsRatings } from "../../../graphql/studentPortal/skillRatings/fetchUserSkillsRatings";
import SkillRowEmoji from "./SkillRowEmoji";

export type SkillRowProps = {
  userSkillRating: UserSkillsRatings;
  isEditable: boolean;
};

export default function SkillRow({
  userSkillRating,
  isEditable,
}: SkillRowProps) {
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
        {renderEmojiByRating(userSkillRating.studentRating)}
      </div>
      <p className="text-xl sm:col-span-3 sm:col-start-2">
        {userSkillRating.intro_course_skill.name}
      </p>
      <div className="flex items-center space-x-4 sm:col-span-2">
        <p className="text-xl">{userSkillRating.studentRating}</p>
        <SkillRowEmoji
          userSkillId={userSkillRating.id}
          studentRating={userSkillRating.studentRating}
          isEditable={isEditable}
        />
      </div>
    </div>
  );
}
