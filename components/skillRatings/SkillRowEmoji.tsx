import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSkillRatings } from "../../redux/skillRatingsSlice";

export interface EmojiSliderProps {
  skillId: String;
}

const EmojiSlider = ({ skillId }: EmojiSliderProps) => {
  const dispatch = useDispatch();

  function handleChange(e) {
    const newStudentRating = Number(e.target.value) || 0;
    dispatch(updateSkillRatings({ newStudentRating, skillId }));
  }

  return (
    <div className="flex flex-col items-center">
      <input type="range" onChange={handleChange} className="w-44" />
    </div>
  );
};

export default EmojiSlider;
