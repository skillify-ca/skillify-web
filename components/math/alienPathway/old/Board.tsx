import React, { FC, useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import Block, { BlockComponent } from "./Block";

interface BoardComponentProps {
  // change from any
  gridList: any;
  newGame: number;
  submitGuess: (guess: GuessData) => void;
  answer: string;
}

const BoardComponent: FC<BoardComponentProps> = ({
  gridList,
  newGame,
  submitGuess,
  answer,
}) => {
  return (
    <div className="px-20 pb-10">
      <div className="grid grid-cols-7 border-2 text-white text-2xl">
        {gridList.map((gridData) => (
          <div className={`border-r-2 border-b-2 md:h-8 sm:h-8 h-8`}>
            <BlockComponent
              blockNumber={0}
              newGame={0}
              submitGuess={""}
              answer={""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardComponent;
