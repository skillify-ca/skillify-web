import React, { useState } from 'react'
import { CardColorProblemData } from './CardColorProblemData'
import FinanceCard from './FinanceCard';

const CardColorProblem = () => {


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
    </div>
  );
};

export default CardColorProblem
