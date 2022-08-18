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
    <div className="sticky top-0 w-full border border-purple-800 h-min bg-gradient-to-r from-gray-200 to-purple-200">
      <div className="flex flex-row items-center gap-12 p-2 uppercase justify-evenly text-md md:text-xl md:p-4">
        <h3>
          name: <span className="font-extrabold text-yellow-500">{name}</span>
        </h3>
        <h3>
          score: <span className="font-extrabold text-purple-500">{score}</span>
        </h3>
      </div>
    </div>
  );
};

export default CreditCardProgressTracker;
