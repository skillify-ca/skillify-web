import { Button } from "../../ui/Button";
import { useState, FC } from "react";

const diceRoll = () => {
  return Math.floor(Math.random() * 6 + 1);
};

const DiceSection: FC = () => {
  const [roll1, setRoll1] = useState(0);
  const [roll2, setRoll2] = useState(0);

  return (
    <div className="flex justify-evenly items-center">
      <div className="border-2 h-40 w-40 rounded-3xl bg-neutral-300 text-black-500 flex flex-col justify-center items-center gap-3 drop-shadow-md">
        <p className="text-sm">dice 1</p>
        <p className="text-2xl">{roll1}</p>
      </div>

      <div className="border-2 h-40 w-40 rounded-3xl bg-neutral-300 text-black-500 flex flex-col justify-center items-center gap-3 drop-shadow-md">
        <p className="text-sm">dice 2</p>
        <p className="text-2xl">{roll2}</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col justify-center text-center bg-[#ABC0CF] rounded-md p-5 gap-2 drop-shadow-xl">
          <p>Your Number:</p>
          <p className="text-3xl ">{(roll1 + roll2) * 2}</p>
        </div>
        <Button
          label={"Roll Dice"}
          onClick={() => {
            setRoll1(diceRoll), setRoll2(diceRoll);
          }}
        />
        <Button label={"Game Rules"} backgroundColor="yellow" />
        <Button
          label={"🔄 New Game"}
          backgroundColor="pink"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default DiceSection;
