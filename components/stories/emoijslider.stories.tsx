import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Emoji Slider",
};

const Template: Story = () => {
  const [mood, setMood] = useState("😐");

  function handleChange(e) {
    const val = e.target.value;
    if (val < 33) {
      setMood("😔");
    } else if (val >= 33 && val < 66) {
      setMood("😐");
    } else if (val > 66) {
      setMood("😄");
    }
  }

  return (
    <div>
      <input type="range" list="tickmarks" onChange={handleChange} />
      <datalist>
        <option value="sad" label="😔"></option>
        <option value="ok" label="😐"></option>
        <option value="happy" label="😄"></option>
      </datalist>

      <p className="text-xl">{mood}</p>
    </div>
  );
};

export const Primary = Template.bind({});
