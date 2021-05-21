import React from "react";

export interface ProgressRingProps {
  percentage: number;
}

const ProgressRing = ({ percentage }: ProgressRingProps) => {
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
      className={`ring-${progressRingColor}-500 rounded-full ring-8 ring-offset-2 w-32 h-32 mb-8`}
    >
      <p
        className={`flex justify-center items-center bg-${progressRingColor}-200 shadow-inner ring-${progressRingColor}-500 text-center rounded-full ring-8 w-32 h-32 text-3xl font-semibold`}
      >
        {percentage}%
      </p>
    </div>
  );
};

export default ProgressRing;
