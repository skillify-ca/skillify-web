import React, { useState } from 'react';
import { noun } from '../../pages/api/WordProblemModel';

export interface WordProblemProp {
  question: string;
  name: string;
  container: string;
  noun1: noun;
  noun2: noun;
}


/**
 * Primary UI component for user interaction
 */
export const WordProblem: React.FC<WordProblemProp> = ({
  question,
  name,
  container,
  noun1,
  noun2,
  ...props
}) => {
    const parse = () => {
        const parts = question.split(" ");
        return {
          first: parts[0],
          second: parts[2],
        };
      };
      console.log(noun1);
  return (
      <div>
    <div className="text-xl flex flex-wrap">
      <p className="align-left">{name} has a {container} of {noun1.type}. Inside, there are
      <span className={noun1.colour}>{" "+parse().first+ " "}</span>
      {/* text-yellow-600 replace yellow with noun1.ob.colour */}
      {noun1.title} and  
      <span className={noun2.colour}>{" "+parse().second+ " "}</span>
      {noun2.title}. How many {noun1.type} are in the {container}?
      {/* text-silver-600 replace silver with noun1.ob.colour */}
      </p>
      </div>
      <div className="text-2xl flex flex-wrap">
           <input type="number" className= "appearance-none relative block px-3 py-2 text-center border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 bg-blue-100 focus:z-10 text-sm sm:text-lg w-full mt-2"
        placeholder="Enter Answer">
        </input>
    </div>
    <div className= "flex flex-wrap mt-3">
    <img src= {noun1.image} width="30" height="45" className="ml-2"></img>
    <img src= {noun2.image} width="30" height="45" className="ml-6"></img>
    <img src= {noun1.image} width="30" height="45" className="ml-6"></img>
    <img src= {noun2.image} width="30" height="45" className="ml-6"></img>
    <img src= {noun1.image} width="30" height="45" className="ml-6"></img>
    </div>
</div>
  );
};


