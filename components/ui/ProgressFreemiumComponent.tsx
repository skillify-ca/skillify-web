import { Indicator, Root } from "@radix-ui/react-progress";
import React from "react";

export interface ProgressFreemiumComponentProps {
  elapsedDays: number;
  totalTrialDays: number;
}
const ProgressFreemiumComponent: React.FC<ProgressFreemiumComponentProps> = ({
  elapsedDays,
  totalTrialDays,
}) => {
  return (
    <div>
      <Root
        className="relative overflow-hidden bg-white rounded-full w-40 h-2"
        style={{
          transform: "translateZ(0)",
        }}
        value={elapsedDays}
      >
        <Indicator
          className="bg-rattata w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
          style={{
            transform: `translateX(-${
              100 - (elapsedDays / totalTrialDays) * 100
            }%)`,
          }}
        />
      </Root>
    </div>
  );
};

export default ProgressFreemiumComponent;
