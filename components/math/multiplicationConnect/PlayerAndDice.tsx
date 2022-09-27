import { Button } from "../../ui/Button";
import { useState, FC, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  multiplicationConnectSelector,
  Stage,
} from "../../../redux/multiplicationConnectSlice";

const diceRoll = () => {
  return Math.floor(Math.random() * 6 + 1);
};

interface PlayerAndDiceProps {
  normalMode: boolean;
}

const PlayerAndDice: FC<PlayerAndDiceProps> = ({ normalMode }) => {
  const [shake, setShake] = useState(false);
  const [roll1, setRoll1] = useState(0);
  const [roll2, setRoll2] = useState(0);
  const [playerOne, setPlayerOne] = useState(String);
  const [playerTwo, setPlayerTwo] = useState(String);
  const ref = useRef<HTMLParagraphElement>();
  const { isPlayerOne, stage } = useSelector(multiplicationConnectSelector);

  useEffect(() => {
    if (stage === Stage.GAME_PLAY) {
      console.count("Animation function!");
      if (ref.current) {
        if (!ref.current.classList.contains("hidden")) {
          setTimeout(
            () => (
              (ref.current.style.scale = "170%"),
              ref.current.classList.add("animate-bounce")
            ),
            200
          );
          setTimeout(() => (ref.current.style.opacity = "0"), 3000);
          setTimeout(() => ref.current.classList.add("hidden"), 3500);
        }
      }
    }
  }, [stage]);

  return (
    <section className="flex flex-col gap-5">
      {/* Player Name Input*/}
      <div>
        <div className="flex items-center justify-evenly">
          <input
            className="bg-inherit text-lg placeholder:text-inherit max-w-[150px] h-12 text-center cursor-pointer rounded-lg 
              bg-gradient-to-tr from-[#ce0000]/30 to-[#ff7d7e]/30 font-mono"
            placeholder="Player 1"
            value={playerOne}
            onChange={(e) => setPlayerOne(e.target.value)}
          ></input>
          <input
            className="bg-inherit text-lg placeholder:text-inherit max-w-[150px] h-12 text-center cursor-pointer rounded-lg 
              bg-gradient-to-tr from-[#ffcf00]/30 to-[#ffed5b]/30 font-mono"
            placeholder="Player 2"
            value={playerTwo}
            onChange={(e) => setPlayerTwo(e.target.value)}
          ></input>
          <p className="text-sm transition-all" ref={ref}>
            👈🏼 Click to rename
          </p>
        </div>
      </div>

      {/* Dice & Current Player Turn/Number */}
      <div className="flex items-center justify-evenly">
        <div
          className={`flex flex-col items-center justify-center w-40 h-40 gap-3 border-2 border-stone-500/25 z-10 rounded-3xl bg-stone-300 text-black-500 drop-shadow-md ${
            shake && "animate-shake"
          }`}
        >
          <p className="text-sm">dice 1</p>
          <p className="text-2xl">{roll1}</p>
        </div>
        <div
          className={`flex flex-col items-center justify-center w-40 h-40 gap-3 border-2 border-stone-500/25 z-10 rounded-3xl bg-stone-300 text-black-500 drop-shadow-md ${
            shake && "animate-shake"
          }`}
          onAnimationEnd={() => setShake(false)}
        >
          <p className="text-sm">dice 2</p>
          <p className="text-2xl">{roll2}</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="z-10 flex flex-col justify-center gap-2 p-5 text-center text-white bg-gradient-to-br from-blue-800/80 to-indigo-900/100 rounded-xl drop-shadow-xl">
            {/* Make sure dice has been rolled before selecting a block */}
            <div className="font-mono">
              <span
                className={`font-bold underline ${
                  isPlayerOne
                    ? "decoration-red-500 decoration-2"
                    : "decoration-amber-400 decoration-2"
                }`}
              >
                {/* check whose turn it is and render name if it exists (from above input) */}
                {isPlayerOne
                  ? playerOne
                    ? playerOne + "'s"
                    : "Player One"
                  : playerTwo
                  ? playerTwo + "'s"
                  : "Player Two"}
              </span>
              <p className="text-left">{normalMode ? "turn" : "number:"}</p>
            </div>
            <p className={`text-3xl ${normalMode && "hidden"}`}>
              {(roll1 + roll2) * 2}
            </p>
          </div>
          <div className="z-10">
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

export default PlayerAndDice;
