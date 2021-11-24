import React, { useState } from 'react'
import { GuessData } from '../../pages/api/guessData';
import { Button } from '../ui/Button';
import { CardColorProblemData } from './CardColorProblemData'
import FinanceCard from './FinanceCard';

export interface CardColorProps {
  answer?: string,
  submitGuess?: (guess:GuessData) => void;
}


const CardColorProblem = ({ 
  answer, submitGuess
}: CardColorProps) => {

  const onSubmit = (guess: string) => {
    submitGuess({
      guess: guess,
      isCorrect: guess.toString() == answer.toString()
    });
  }

  const [guess, setGuess ] = useState("Click to Change")
  const [isCorrect, setIsCorrect ] = useState(false)

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 p-12 gap-4">
        <div>
          <h1 className="text-3xl font-bold uppercase">Credit or Debit</h1>
        </div>
        {CardColorProblemData.map((item, index) => (
          <FinanceCard
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
      <div className="flex flex-row space-x-8 justify-center">
      <Button
        label="submit"
        backgroundColor="blue"
        textColor="white"
        onClick={()=> onSubmit(guess)}/>
      </div>
    </div>
  );
};

export default CardColorProblem
