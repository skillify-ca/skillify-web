import { Indicator, Root } from "@radix-ui/react-progress";
import React from "react";

export interface ProgressComponentProps {
  currentValue: number;
  totalValue: number;
}
const ProgressComponent: React.FC<ProgressComponentProps> = ({
  currentValue,
  totalValue,
}) => {
  return (
    <div>
      <Root
        className="relative overflow-hidden bg-gray-300 rounded-full w-40 h-2"
        style={{
          transform: "translateZ(0)",
        }}
        value={currentValue}
      >
        <Indicator
          className="bg-rattata w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
          style={{
            transform: `translateX(-${
              100 - (currentValue / totalValue) * 100
            }%)`,
          }}
        />
      </Root>
    </div>
  );
};

export default ProgressComponent;
