import React, { useEffect, useState } from "react";
import { Root, Indicator } from "@radix-ui/react-progress";

interface ProgressBarComponentProps {
  elapsedDays: number;
  totalTrialDays: number;
  size: "small" | "medium" | "large";
}
const ProgressBarComponent: React.FC<ProgressBarComponentProps> = ({
  elapsedDays,
  totalTrialDays,
  size,
}) => {
  const [progress, setProgress] = useState(0);
  let barSize;
  switch (size) {
    case "small":
      barSize = "w-[120px] h-[8px]";
      break;
    case "medium":
      barSize = "w-[150px] h-[14px]";
      break;
    case "large":
      barSize = "w-[300px] h-[25px]";
      break;
  }
  useEffect(() => {
    setProgress(elapsedDays);
  }, []);

  return (
    <div>
      <Root
        className={`relative overflow-hidden bg-white rounded-full ${barSize}`}
        style={{
          transform: "translateZ(0)",
        }}
        value={progress}
      >
        <Indicator
          className="bg-rattata w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
          style={{
            transform: `translateX(-${
              100 - (progress / totalTrialDays) * 100
            }%)`,
          }}
        />
      </Root>
    </div>
  );
};

export default ProgressBarComponent;
