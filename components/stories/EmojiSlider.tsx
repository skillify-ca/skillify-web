import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";

const EmojiSlider = () => {
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
  }

  return (
    <div className="flex flex-col">
      <input type="range" onChange={handleChange} className="w-44" />
      <datalist>
        <option value="sad" label="😔"></option>
        <option value="ok" label="😐"></option>
        <option value="happy" label="😄"></option>
      </datalist>
      <p className="text-4xl">{mood}</p>
      <p> {opinion} </p>
    </div>
  );
};

export default EmojiSlider;
