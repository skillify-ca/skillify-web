import React from "react";

export interface RatingSliderProps {
  isEditable: boolean;
  userSkillRating: number;
  handleUserSkillRatingChange: (newStudentRating: number) => void;
}

const RatingSlider = ({
  isEditable,
  userSkillRating,
  handleUserSkillRatingChange,
}: RatingSliderProps) => {
  function handleChange(e) {
    const newStudentRating = Number(e.target.value) || 0;
    handleUserSkillRatingChange(newStudentRating);
  }

  return (
    <div className="flex flex-col items-center">
      <input
        type="range"
        onChange={handleChange}
        className="w-44"
        value={userSkillRating}
        disabled={!isEditable}
      />
    </div>
  );
};

export default RatingSlider;
