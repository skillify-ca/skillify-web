import React, { useState } from 'react';
import { Button } from "./Button";

export interface LongDivisionProp {
    question?: string;
    submitGuess: (e) => void;
  }

  
/**
 * Primary UI component for user interaction
 */
 export const LongDivision: React.FC<LongDivisionProp> = ({
    question,
    submitGuess,
    ...props
  }) => {
    const [guess, setGuess] = useState('');

    const handleKeypress = (e) => {
      //it triggers by pressing the enter key
      if (e.charCode === 13) {
        submitGuess(e);
      }
    };

    const parse = () => {
      const parts = question.split(" ");
      return {
        first: parts[0],
        second: parts[2],
      };
    };

    return (
        <div>  
            <div className = "flex flex-row">
                <span className="flex flex-col-reverse">{parse().second}&nbsp;</span>
                <div className = "flex flex-col">
                    <input type="text" contentEditable="true" className= "text-left border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:z-10 text-md lg:text-md w-8" placeholder=" "></input>
                    <span className="border-t-2 border-l-2 border-black">{parse().first}</span>
                </div>
            </div>
            <div className="mt-4"> 
                <Button
                    onClick={submitGuess}
                    label="Submit"
                    backgroundColor="blue"
                    textColor="white"
                />
            </div> 
        </div>
    );
};
