import React, { useEffect, useState } from "react";
import { Button } from "../../ui/Button";

export interface CalculateWinnerProps {
  text: string;
  onClick: () => void;
  winner: string;
  image: any;
}

export const CalculateWinner: React.FC<CalculateWinnerProps> = ({
  text,
  onClick,
  winner,
  image,
  ...props
}) => {
  return (
    <div className="flex-row justify-center">
      <div className="flex justify-center animate-bounce space-y-6 py-4 bg-gradient-to-b bg-charmander hover:bg-pikachu-500 text-white px-3 font-bold text-xl border-b-4 rounded-lg active:border-b-2 cursor-pointer`">
        {winner}
      </div>
      <div className="flex justify-center"> {image}</div>
      <p className="py-8 flex justify-center">
        Take heart. Practice makes perfect. Begin again!
      </p>
      <div className="flex justify-center">
        <Button label={"Play Again"} onClick={onClick} />
      </div>
    </div>
  );
};
export default CalculateWinner;
