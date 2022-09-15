import React, { FC } from "react";
import { Input } from "../../ui/Input";

const PlayerSection: FC = () => {
  return (
    <div>
      <div className="flex items-center justify-evenly">
        <input
          className="bg-inherit placeholder:text-inherit max-w-[200px] h-12 text-center cursor-pointer rounded-xl enabled:bg-[#F20000]/10"
          placeholder="Player 1"
        ></input>
        <input
          className="bg-inherit placeholder:text-inherit max-w-[200px] h-12 text-center cursor-pointer rounded-xl enabled:bg-[#FFDB00]/10"
          placeholder="Player 2"
        ></input>
        <p className="align-middle text-md">👈🏼 Click to rename</p>
      </div>
    </div>
  );
};

export default PlayerSection;
