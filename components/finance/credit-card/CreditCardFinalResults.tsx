import React from "react";

const CreditCardFinalResults = ({ name, score }) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-12">
      <h1 className="text-7xl">{name}</h1>
      <h3 className="text-4xl font-extrabold">Your score was: {score}</h3>
    </div>
  );
};

export default CreditCardFinalResults;
