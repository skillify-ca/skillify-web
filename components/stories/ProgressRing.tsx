import React from "react";

export interface ProgressRingProps {
  percentage: number;
  radius: number;
}

const ProgressRing = ({ percentage, radius }: ProgressRingProps) => {
  let innerCircleColor;
  let ringColor;
  if (percentage >= 70) {
    innerCircleColor = "bg-green-200";
    ringColor = "ring-green-500";
  } else if (percentage >= 50) {
    innerCircleColor = "bg-blue-200";
    ringColor = "ring-blue-500";
  } else if (percentage < 50) {
    innerCircleColor = "bg-purple-200";
    ringColor = "ring-purple-500";
  }

  return (
    <div>
      <p
        className={`flex justify-center items-center ${innerCircleColor} shadow-inner ${ringColor} text-center rounded-full ring-8 w-${radius} h-${radius} text-3xl font-semibold`}
      >
        {percentage}%
      </p>
    </div>
  );
};

export default ProgressRing;
