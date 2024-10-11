import Link from "next/link";
import React from "react";

export type ProgressBarProps = {
  completed: number;
  exitLink: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  completed,
  exitLink,
}: ProgressBarProps) => {
  const fillerStyles = {
    height: "100%",
    width: `${Math.max(8, completed)}%`,
    borderRadius: "inherit",
  };
  return (
    <div className="flex flex-row items-center">
      <Link href={exitLink}>
        <a>
          <img
            src="/images/studentPortal/exitButton.svg"
            className="pb-8 mr-4"
          />
        </a>
      </Link>

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
