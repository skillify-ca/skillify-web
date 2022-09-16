
import { Button } from "../../ui/Button";
import { useState, FC } from "react";


const diceRoll = () => {
  return Math.floor(Math.random() * 6 + 1);
};

const DiceSection: FC = () => {
  const [roll1, setRoll1] = useState(0);
  const [roll2, setRoll2] = useState(0);

  return (
    <div className="flex items-center justify-evenly">
      <div className="flex flex-col items-center justify-center w-40 h-40 gap-3 border-2 rounded-3xl bg-neutral-300 text-black-500 drop-shadow-md">
        <p className="text-sm">dice 1</p>
        <p className="text-2xl">{roll1}</p>
      </div>

      <div className="flex flex-col items-center justify-center w-40 h-40 gap-3 border-2 rounded-3xl bg-neutral-300 text-black-500 drop-shadow-md">
        <p className="text-sm">dice 2</p>
        <p className="text-2xl">{roll2}</p>
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col justify-center text-center text-black-500 bg-[#ABC0CF] rounded-md p-5 gap-2 drop-shadow-xl">
          <p>Your Number:</p>
          <p className="text-3xl ">{(roll1 + roll2) * 2}</p>
        </div>
        <div className="flex flex-col gap-3">
          <Button
            label={"Roll Dice"}
            onClick={() => {
              setRoll1(diceRoll), setRoll2(diceRoll);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DiceSection;
