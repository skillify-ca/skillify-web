import React, { useState } from "react";

export interface EmojiSliderProps {
  callback: (val: number) => void;
}

const EmojiSlider = ({ callback }: EmojiSliderProps) => {
  const [mood, setMood] = useState("😐");

  function handleChange(e) {
    const val = e.target.value;
    if (val == 0) {
      setMood("😶");
    } else if (val < 30) {
      setMood("😐");
    } else if (val < 60) {
      setMood("🙂");
    } else if (val < 90) {
      setMood("😊");
    } else {
      setMood("🤩");
    }

    callback(val);
  }

  return (
    <div className="flex flex-col items-center">
      <input type="range" onChange={handleChange} className="w-44" />
    </div>
  );
};

export default EmojiSlider;
