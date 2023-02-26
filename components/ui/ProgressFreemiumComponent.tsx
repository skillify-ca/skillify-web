import { Indicator, Root } from "@radix-ui/react-progress";
import React, { useEffect, useState } from "react";

export interface ProgressFreemiumComponentProps {
  elapsedDays: number;
  totalTrialDays: number;
}
const ProgressBarComponent: React.FC<ProgressFreemiumComponentProps> = ({
  elapsedDays,
  totalTrialDays,
}) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(elapsedDays);
  }, []);

  return (
    <div>
      <Root
        className="relative overflow-hidden bg-white rounded-full w-4/5 h-[8px]"
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
