
import React, { useState } from "react";
import Firework from "./Firework";


export interface WinnerProps {
  text: string;
  onClick: () => void;
  onRestartClick: () => void;
  onSameLevelClick: () => void;

  endOfGame: any;

}

export const Winner: React.FC<WinnerProps> = ({
  text,
  onClick,
  onRestartClick,
  onSameLevelClick,

  endOfGame,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center text-center animate-bounce space-y-6 py-4 bg-gradient-to-b bg-purple-700 hover:bg-purple-500 text-white px-3 font-bold text-md md:text-xl border-b-4 rounded-lg active:border-b-2 cursor-pointer`">
        {endOfGame.winnerOutcomes.message}
      </div>
      <div className="flex justify-center md:p-6 p-2">
        {endOfGame.winnerOutcomes.image != null && (
          <img src={endOfGame.winnerOutcomes.image} />
        )}
        {endOfGame.winnerOutcomes.image == null && <Firework />}
      </div>
      <section
        className="inline-flex ml:20 w-56 bg-purple-700 border border-gray-300 rounded-md cursor-pointer "

        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative">
          <button
            type="button"

            className="inline-flex h-full px-2 text-white border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-purple-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="flex self-center text-base md:text-lg md:pt-4 py-2 font-bold">
              Math Warrior, choose your next move!
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div
            onMouseOut={() => setIsOpen(false)}
            className={`transition-opacity duration-200 absolute center-0 z-10 w-56 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg dark:bg-gray-900 dark:border-gray-800 ${
              isOpen ? "opacity-100 visible" : " opacity-0 invisible"
            }`}
            role="menu"
          >
            <div className="p-2">
              <button

                className="flex  items-center w-full px-4 py-2 text-sm md:text-lg text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 "

                type="submit"
                role="menuitem"
                onClick={onRestartClick}
              >

                <span className="pr-2 text-2xl"></span> Restart Game at Level 1
              </button>

              <button
                className="flex items-center w-full px-4 py-2 text-sm md:text-lg text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 "

                type="submit"
                role="menuitem"
                onClick={onSameLevelClick}
              >
                <span className="pr-2 text-2xl"></span> Practice My Level
              </button>

              <button
                type="submit"

                className="flex items-center w-full gap-2 px-4 py-2 text-sm md:text-lg text-red-700 rounded-lg dark:text-red-500 dark:hover:bg-red-600/10 hover:bg-red-50"

                role="menuitem"
                onClick={() => onClick()}
              >
                <span className="text-2xl"></span> Save & Continue
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Winner;
