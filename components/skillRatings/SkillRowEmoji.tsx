import React from "react";
import { useDispatch } from "react-redux";
import { updateSkillRatings } from "../../redux/skillRatingsSlice";

export interface EmojiSliderProps {
  userSkillId: String;
  studentRating: number;
}

const EmojiSlider = ({ userSkillId, studentRating }: EmojiSliderProps) => {
  const dispatch = useDispatch();

  function handleChange(e) {
    const newStudentRating = Number(e.target.value) || 0;
    dispatch(updateSkillRatings({ newStudentRating, userSkillId }));
  }

  return (
    <div className="flex flex-col items-center">
      <input
        type="range"
        onChange={handleChange}
        className="w-44"
        value={studentRating}
      />
    </div>
  );
};

export default EmojiSlider;
