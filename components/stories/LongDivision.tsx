import React, { useState } from 'react';

export interface LongDivisionProp {
  question?: string;
  operator: string;
}

/**
 * Primary UI component for user interaction
 */
export const LongDivision: React.FC<LongDivisionProp> = ({
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

  const classNamee = "text-8xl flex flex-col flex-end items-end border-b-8 border-pink-900";

  return (
    <div className = "flex flex-col flex-end items-start">
        <input type="text" className= "ml-4 align-center text-center border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:z-10 text-sm sm:text-lg w-6" placeholder=" "></input>
        <div> 
            <span>{parse().second}&nbsp;</span>
            <span className="align-right border-t-2 border-l-2 border-black"> {parse().first}</span>
        </div>
    </div>
  );
};

