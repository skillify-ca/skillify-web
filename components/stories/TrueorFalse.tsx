import React from "react";


export interface TrueorFalseProp {
  question?: string;
  answer: boolean;
}


export const TrueorFalse: React.FC<TrueorFalseProp> = ({
    question, answer,
    ...props
  }) => {
    return (
        <div className="items-center" > 
      <p className = "text-5xl text-center">{question}</p>
      <button >True</button>
      <button>False</button>    
        </div>
    )
  }
