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
    <div>
      <div className="h-8 w-full bg-gray-300 border rounded-full">
        <div style={fillerStyles} className="text-right bg-rattata">
          <span className="p-5 text-white font-bold text-center">{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
