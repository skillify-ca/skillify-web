import React from "react";

export type StatementRowProps = {
  text: string;
  complete: boolean;
};

export const StatementRow: React.FC<StatementRowProps> = ({
  text,
  complete,
}: StatementRowProps) => {
  let progressComponent;
  if (complete) {
    progressComponent = (
      <img src={"/images/checkmark.png"} alt="skill image" className="w-8" />
    );
  } else {
    progressComponent = (
      <img src={"/images/progress.png"} alt="skill image" className="w-8" />
    );
  }
  return (
    <div className="flex shadow-md items-center justify-between p-4 bg-white border-b-2 hover:bg-blue-100">
      <p className="text-sm">{text}</p>
      {progressComponent}
    </div>
  );
};

export default StatementRow;
