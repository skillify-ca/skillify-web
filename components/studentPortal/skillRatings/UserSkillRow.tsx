import React from "react";

import { UserSkillsRatings } from "../../../graphql/studentPortal/skillRatings/fetchUserSkillsRatings";
import RatingSlider from "./RatingSlider";

export type UserSkillRowProps = {
  userSkillRating: UserSkillsRatings;
  isEditable: boolean;
  handleUserSkillRatingChange: (rating: number) => void;
};

export default function UserSkillRow({
  userSkillRating,
  isEditable,
  handleUserSkillRatingChange,
}: UserSkillRowProps) {
  const [rating, setRating] = React.useState(userSkillRating.studentRating);
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
        <p className="text-xl">{rating}</p>
        <RatingSlider
          isEditable={isEditable}
          userSkillRating={rating}
          handleUserSkillRatingChange={(newRating) => {
            setRating(newRating);
            handleUserSkillRatingChange(newRating);
          }}
        />
      </div>
    </div>
  );
}
