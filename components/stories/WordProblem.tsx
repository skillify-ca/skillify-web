import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export interface WordProblemProp {
  submitGuess: (e) => void;
  question: string;
  name: string;
}


/**
 * Primary UI component for user interaction
 */
export const WordProblem: React.FC<WordProblemProp> = ({
  submitGuess,
  question,
  name,
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
      <div className="text-xl flex flex-wrap">
        <p className="align-left">{name} has a chest of coins. Inside, there are
      <span className="text-yellow-500 font-black">{" " + parse().first + " "}</span>
      gold coins and
      <span className="text-gray-300 font-black">{" " + parse().second + " "}</span>
      silver coins. How many coins are in the chest?
      </p>
      </div>
      <div className="text-2xl flex flex-wrap">
        <Input guess={guess} setGuess={setGuess} handleKeypress={handleKeypress} />
      </div>
      <div className="flex flex-wrap mt-3">
        <img src="/images/gold-coin.png" width="70" height="75" className="mr-2"></img>
        <img src="/images/gold-coin.png" width="70" height="75" className="ml-3 "></img>
        <img src="/images/gold-coin.png" width="70" height="75" className="ml-3 "></img>
      </div>
      <Button
          onClick={submitGuess}
          label="Submit"
          backgroundColor="blue"
          textColor="white"
        />
    </div>
  );
};