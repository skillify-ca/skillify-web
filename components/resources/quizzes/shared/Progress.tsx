import React from "react";
type ProgressProps = {
  progress: number;
};

const Progress: React.FC<ProgressProps> = ({ progress }) => {
  return (
    <div className="relative w-full h-4 bg-gray-300 rounded-full">
      <div
        className="absolute top-0 left-0 h-full rounded-full bg-violet-400"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default Progress;
