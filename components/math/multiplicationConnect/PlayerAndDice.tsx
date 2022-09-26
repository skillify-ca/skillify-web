import { Button } from "../../ui/Button";
import { useState, FC, useRef } from "react";
import { useSelector } from "react-redux";
import {
  multiplicationConnectSelector,
  Stage,
} from "../../../redux/multiplicationConnectSlice";

const diceRoll = () => {
  return Math.floor(Math.random() * 6 + 1);
};

const DiceSection: FC = () => {
  const [shake, setShake] = useState(false);
  const [roll1, setRoll1] = useState(0);
  const [roll2, setRoll2] = useState(0);
  const ref = useRef<HTMLParagraphElement>();
  const { isPlayerOne, stage } = useSelector(multiplicationConnectSelector);

  if (stage === Stage.GAME_PLAY) {
    setTimeout(() => (ref.current.style.scale = "140%"), 200);
    setTimeout(() => (ref.current.style.opacity = "0"), 4000);
    setTimeout(() => ref.current.classList.add("hidden"), 5000);
  }

  return (
    <section className="flex flex-col gap-4">
      {/* Player */}
      <div>
        <div className="flex items-center justify-evenly">
          <input
            className="bg-inherit text-lg placeholder:text-inherit max-w-[150px] h-12 text-center cursor-pointer rounded-lg 
              bg-gradient-to-tr from-[#ce0000]/30 to-[#ff7d7e]/30 font-mono"
            placeholder="Player 1"
          ></input>
          <input
            className="bg-inherit text-lg placeholder:text-inherit max-w-[150px] h-12 text-center cursor-pointer rounded-lg 
              bg-gradient-to-tr from-[#ffcf00]/30 to-[#ffed5b]/30 font-mono"
            placeholder="Player 2"
          ></input>
          <p className="text-sm transition-all" ref={ref}>
            👈🏼 Click to rename
          </p>
        </div>
      </div>

      {/* Dice */}
      <div className="flex items-center justify-evenly">
        <div
          className={`flex flex-col items-center justify-center w-40 h-40 gap-3 border-2 border-stone-500/25 -z-10 rounded-3xl bg-stone-300 text-black-500 drop-shadow-md ${
            shake && "animate-shake"
          }`}
        >
          <p className="text-sm">dice 1</p>
          <p className="text-2xl">{roll1}</p>
        </div>
        <div
          className={`flex flex-col items-center justify-center w-40 h-40 gap-3 border-2 border-stone-500/25 -z-10 rounded-3xl bg-stone-300 text-black-500 drop-shadow-md ${
            shake && "animate-shake"
          }`}
          onAnimationEnd={() => setShake(false)}
        >
          <p className="text-sm">dice 2</p>
          <p className="text-2xl">{roll2}</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col justify-center gap-2 p-5 text-center text-white bg-gradient-to-br from-blue-800/80 to-indigo-900/100 rounded-xl -z-10 drop-shadow-xl">
            <p>Your Number:</p>
            <p className="text-3xl ">{(roll1 + roll2) * 2}</p>
          </div>
          <div className="flex flex-col gap-3">
            <Button
              label={"Roll Dice"}
              onClick={() => {
                setRoll1(diceRoll), setRoll2(diceRoll);
                setShake(true);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiceSection;
