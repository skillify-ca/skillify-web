import React from "react";
import {Button} from "./Button";
export interface TrueorFalseProp {
  question?: string;
  answer: boolean;
}

export const TrueorFalse: React.FC<TrueorFalseProp> = ({
  question,
  answer,
  ...props
}) => {
  return (
    <div className="items-center">
      <p className="text-5xl text-center">{question}</p>
      <Button label = "True"></Button>
      <Button label = "False"></Button>
    </div>
  );
};
