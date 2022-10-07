import { Button } from "../../ui/Button";
import { useState, FC, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDiceButtonRef,
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
  const changeNameRef = useRef<HTMLParagraphElement>();

  const diceButtonRef = useRef<HTMLDivElement>();
  // diceState redux state
  const { isPlayerOne, stage } = useSelector(multiplicationConnectSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    // On page load, send diceButtonRef to redux
    if (diceButtonRef.current) dispatch(addDiceButtonRef(diceButtonRef));
  }, []);

  useEffect(() => {
    // Animation to prompt user to change name
    if (stage === Stage.GAME_PLAY) {
      if (
        changeNameRef.current &&
        !changeNameRef.current.classList.contains("hidden")
      ) {
        setTimeout(
          () => (
            (changeNameRef.current.style.scale = "170%"),
            changeNameRef.current.classList.add("animate-bounce")
          ),
          200
        );
        setTimeout(() => (changeNameRef.current.style.opacity = "0"), 3000);
        setTimeout(() => changeNameRef.current.classList.add("hidden"), 3500);
      }
    }
  }, [stage]);

  return (
    <section className="flex flex-col gap-5">
      {/* Player Name Input*/}
      <div>
        <div className="flex items-center justify-evenly">
          <input
            className="bg-inherit text-lg placeholder:text-inherit max-w-[150px] h-8 text-center cursor-pointer rounded-lg 
              bg-gradient-to-tr from-[#ce0000]/30 to-[#ff7d7e]/30 font-mono"
            placeholder="Player 1"
            value={playerOne}
            onChange={(e) => setPlayerOne(e.target.value)}
          ></input>
          <input
            className="bg-inherit text-lg placeholder:text-inherit max-w-[150px] h-8 text-center cursor-pointer rounded-lg 
              bg-gradient-to-tr from-[#ffcf00]/30 to-[#ffed5b]/30 font-mono"
            placeholder="Computer"
            value={playerTwo}
            onChange={(e) => setPlayerTwo(e.target.value)}
          ></input>
          <p className="text-sm transition-all" ref={changeNameRef}>
            👈🏼 Click to rename
          </p>
        </div>
      </div>

      <div className="flex items-center justify-evenly">
        {/* Dice */}
        <div
          className={`flex flex-col items-center justify-center md:w-36 md:h-36 sm:w-28 sm:h-28 w-24 h-24 gap-3 border-2 border-stone-500/25 z-10 rounded-3xl bg-stone-300 text-black-500 drop-shadow-md ${
            shake && "animate-shake"
          }`}
        >
          <p className="hidden text-sm sm:block">dice 1</p>
          <p className="text-4xl">{roll1}</p>
        </div>
        <div
          className={`flex flex-col items-center justify-center md:w-36 md:h-36 sm:w-28 sm:h-28 w-24 h-24 gap-3 border-2 border-stone-500/25 z-10 rounded-3xl bg-stone-300 text-black-500 drop-shadow-md ${
            shake && "animate-shake"
          }`}
          onAnimationEnd={() => setShake(false)}
        >
          <p className="hidden text-sm sm:block">dice 2</p>
          <p className="text-4xl">{roll2}</p>
        </div>

        {/* Player turn/number */}
        <div className="flex flex-col items-center gap-5">
          <div className="z-10 flex flex-col justify-center gap-2 p-5 text-center text-white bg-gradient-to-br from-blue-800/80 to-indigo-900/100 rounded-xl drop-shadow-xl">
            <div className="max-w-[10rem] font-mono overflow-hidden">
              <span
                className={`font-bold underline ${
                  isPlayerOne
                    ? "decoration-red-500 decoration-4 "
                    : "decoration-amber-400 decoration-4"
                }`}
              >
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

          <div
            className="z-10 scale-90 sm:scale-100"
            ref={diceButtonRef}
            onClick={() => {
              setRoll1(diceRoll), setRoll2(diceRoll);
              setShake(true);
            }}
          >
            <Button label={"Roll Dice"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerAndDice;
