import React from "react";

export interface ProgressRingProps {
  percentage: number;
  radius: number;
}

const ProgressRing = ({ percentage, radius }: ProgressRingProps) => {
  let progressRingColor;
  if (percentage >= 70) {
    progressRingColor = "green";
  } else if (percentage >= 50) {
    progressRingColor = "blue";
  } else if (percentage < 50) {
    progressRingColor = "purple";
  }

  return (
    <div
      className={`ring-${progressRingColor}-500 rounded-full ring-8 ring-offset-2 w-${radius} h-${radius}`}
    >
      <p
        className={`flex justify-center items-center bg-${progressRingColor}-200 shadow-inner ring-${progressRingColor}-500 text-center rounded-full ring-8 w-${radius} h-${radius} text-3xl font-semibold`}
      >
        {percentage}%
      </p>
    </div>
  );
};

export default ProgressRing;
