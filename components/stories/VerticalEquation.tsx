import React from "react";

export interface VerticalEquationProp {
  question?: string;
  operator: string;
}

/**
 * Primary UI component for user interaction
 */
export const VerticalEquation: React.FC<VerticalEquationProp> = ({
  question,
  operator,
  ...props
}) => {
  const parse = () => {
    const parts = question.split(" ");
    return {
      first: parts[0],
      second: parts[2],
    };
  };
  return (
    <div className="text-8xl flex flex-col flex-end items-end border-b-8 border-blue-900">
      <p className="align-right">{parse().first}</p>
      <div className="flex">
        <p>{operator}</p>
        <p>{parse().second}</p>
      </div>
    </div>
  );
};
