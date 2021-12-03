import React from "react";
export interface CreditCardProgressTrackerProps {
  name?: string;
  score?: number;
  updateScore?: (value: number) => void;
}

const CreditCardProgressTracker: React.FC<CreditCardProgressTrackerProps> = ({
  score,
  name,
}) => {
  return (
    <div className="w-full h-min sticky top-0 border border-purple-800 bg-gradient-to-r from-gray-200 to-purple-200">
      <div className="flex flex-row justify-evenly items-center gap-12 text-md md:text-xl uppercase p-2 md:p-4">
        <h3>
          name: <span className="text-yellow-500 font-extrabold">{name}</span>
        </h3>
        <h3>
          score: <span className="text-purple-500 font-extrabold">{score}</span>
        </h3>
      </div>
    </div>
  );
};

export default CreditCardProgressTracker;
