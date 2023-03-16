import React from "react";
type ProgressBarProps = {
  progress: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="relative w-full h-4 rounded-full bg-gray-300">
      <div
        className="absolute top-0 left-0 h-full rounded-full bg-violet-400"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
