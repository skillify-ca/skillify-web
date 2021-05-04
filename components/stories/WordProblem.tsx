import React from "react";

export interface WordProblemProp {
  question?: string;
}

/**
 * Primary UI component for user interaction
 */
export const WordProblem: React.FC<WordProblemProp> = ({
  question,
  ...props
}) => {
  return (
      <div>
    <div className="text-3xl flex flex-col">
      <p className="align-left">Hayley has a chest of coins. Inside, there are 256 gold coins and 920 silver coins. how many coins are in the chest?</p>
      </div>
      <div className="text-2xl flex flex-wrap">
           <input type="number" className="appearance-none relative block px-3 py-2 text-center border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 bg-blue-100 focus:z-10 sm:text-sm w-1/5"
        placeholder="Enter Answer">
        </input>
        <p className="ml-3 text-yellow-400">coins</p>
    </div>
</div>
  );
};