import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";

export interface EmojiSliderProps {
  callback: (val: number) => void;
}

const EmojiSlider = ({ callback }: EmojiSliderProps) => {
  const [mood, setMood] = useState("😐");
  const [opinion, setOpinion] = useState("Satisfactory");

  function handleChange(e) {
    const val = e.target.value;
    if (val < 33) {
      setMood("😔");
      setOpinion("Needs Improvement");
    } else if (val >= 33 && val <= 66) {
      setMood("😐");
      setOpinion("Satisfactory");
    } else if (val > 66) {
      setMood("😄");
      setOpinion("Awesome");
    }

    callback(val);
  }

  return (
    <div className="flex flex-col items-center">
      <input type="range" onChange={handleChange} className="w-44" />
      <div className="items-center">
        <datalist>
          <option value="sad" label="😔"></option>
          <option value="ok" label="😐"></option>
          <option value="happy" label="😄"></option>
        </datalist>
        <p className="text-4xl items-center justify-items-center">{mood}</p>
        <p className="font-bold"> {opinion} </p>
      </div>
    </div>
  );
};

export default EmojiSlider;
