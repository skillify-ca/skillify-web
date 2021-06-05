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
    <div>
      <div className="flex flex-row">
        <input type="range" list="tickmarks" onChange={handleChange} />
        <datalist>
          <option value="sad" label="😔"></option>
          <option value="ok" label="😐"></option>
          <option value="happy" label="😄"></option>
        </datalist>
      </div>
      <p className="text-4xl">{mood}</p>
    </div>
  );
};

export default EmojiSlider;
