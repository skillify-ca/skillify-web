import React, { useEffect, useState } from "react";
import { Root, Indicator } from "@radix-ui/react-progress";

const ProgressComponent = () => {
  const [progress, setProgress] = useState(13);

  const handleProgressChange = (event) => {
    setProgress(event.target.value);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="30"
        value={progress}
        onChange={handleProgressChange}
      />
      <Root
        className="relative overflow-hidden bg-rattata rounded-full w-[300px] h-[25px]"
        style={{
          transform: "translateZ(0)",
        }}
        value={progress}
      >
        <Indicator
          className="bg-white w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
          style={{ transform: `translateX(-${100 - (progress / 30) * 100}%)` }}
        />
      </Root>
    </div>
  );
};

export default ProgressComponent;
