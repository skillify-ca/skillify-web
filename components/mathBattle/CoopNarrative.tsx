import React, { useCallback, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Button } from "../ui/Button";

export interface CoopStoryComponentProps {
  goToIntro: () => void;
}
const CoopStoryComponent = ({ goToIntro }: CoopStoryComponentProps) => {
  const onFlip = useCallback((e) => {
    console.log("Current page: " + e.data);
  }, []);
  return (
    <div>
      <HTMLFlipBook onFlip={onFlip} width={500} height={500}>
        <div className="bg-gradient-to-r from-yellow-700  to-yellow-200  border-r-4 border-2 border-black border-l-8">
          Page 1
        </div>
        <div className="bg-gradient-to-l from-yellow-700  to-yellow-200 border-2 border-black border-r-8">
          Page 2
        </div>
        <div className="bg-gradient-to-r from-yellow-700 to-yellow-200 border-r-4 border-2 border-black border-l-8">
          Page 3
        </div>
        <div className="bg-gradient-to-l from-yellow-700 to-yellow-200  border-2 border-black border-r-8">
          Page 4
        </div>
      </HTMLFlipBook>
      <Button
        label="Play Game"
        onClick={goToIntro}
        backgroundColor="green"
        textColor="white"
      ></Button>
    </div>
  );
};
export default CoopStoryComponent;
