import React from "react";

export type ProgressBarProps = {
  completed: number;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  completed,
}: ProgressBarProps) => {
  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    borderRadius: "inherit",
  };
  return (
    <div className="w-full h-8 bg-gray-300 border rounded-full mb-8">
      <div
        style={fillerStyles}
        className="flex items-center justify-end bg-rattata"
      >
        <span className="p-5 font-bold text-center text-white">{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
