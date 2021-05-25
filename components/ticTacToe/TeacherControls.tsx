import { useState } from "react";
import { Button } from "../stories/Button";
import Rules from "./Rules";

const TeacherControls = ({ onClick }) => {
  const [targetNumber, setTargetNumber] = useState(15);
  const [gameNumbers, setGameNumbers] = useState("1,2,3,4,5,6,7,8,9");
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white  max-w-2xl p-8">
        <Rules />
        <form
          className="mt-8 space-y-6 flex flex-col justify-center items-center"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-2">
            <label className="inline-flex items-center">Target Number</label>
            <input
              id="target-number"
              name="target"
              type="number"
              value={targetNumber}
              onChange={(e) => setTargetNumber(Number.parseInt(e.target.value))}
              className="appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Target Number"
            />
            <label className="inline-flex">Game Numbers</label>
            <input
              id="numbers"
              name="numbers"
              type="text"
              value={gameNumbers}
              onChange={(e) => setGameNumbers(e.target.value)}
              className="appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Numbers to use in game (eg. 1,2,3,4,5,6,7,8,9)"
            />
            <label className="inline-flex">Player One</label>
            <input
              id="player-one"
              name="player-one"
              type="text"
              value={playerOne}
              onChange={(e) => setPlayerOne(e.target.value)}
              className="appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Type 0 or 1"
            />
          </div>
          <Button backgroundColor="blue" textColor="white" label="Create Game"
            onClick={() =>
              onClick({
                target: targetNumber,
                gameNumbers: gameNumbers,
                playerOne: playerOne,
                playerTwo: playerTwo,
              })
            } />
        </form>
      </div>
    </div>
  );
};

export default TeacherControls;
