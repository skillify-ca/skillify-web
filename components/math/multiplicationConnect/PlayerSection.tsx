import React, { FC } from "react";
import { Input } from "../../ui/Input";

const PlayerSection: FC = () => {
  return (
    <div>
      <div className="flex items-center justify-evenly">
        <input
          className="bg-inherit placeholder:text-inherit max-w-[150px] h-12 text-center cursor-pointer rounded-xl bg-gradient-to-tr from-[#ce0000]/30 to-[#ff7d7e]/30 font-mono"
          placeholder="Player 1"
        ></input>
        <input
          className="bg-inherit placeholder:text-inherit max-w-[150px] h-12 text-center cursor-pointer rounded-xl bg-gradient-to-tr from-[#ffcf00]/40 to-[#ffed5b]/40 font-mono"
          placeholder="Player 2"
        ></input>
        <p className="text-md">👈🏼 Click to rename</p>
      </div>
    </div>
  );
};

export default PlayerSection;
