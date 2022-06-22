import React from "react";

export type ProgressBarProps = {
  completed: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  completed,
}: ProgressBarProps) => {
  const fillerStyles = {
    height: "100%",
    width: `${Math.max(8, completed)}%`,
    borderRadius: "inherit",
  };
  return (
    <div className="flex flex-row items-center">
      <a href="/studentPortal/intro">
        <img src="/images/studentPortal/exitButton.svg" className="pb-8 mr-4" />
      </a>

      <div className="w-full h-8 mb-8 bg-gray-300 border rounded-full">
        <div
          style={fillerStyles}
          className="flex items-center justify-end bg-rattata"
        >
          <span className="p-5 font-bold text-center text-white">{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
