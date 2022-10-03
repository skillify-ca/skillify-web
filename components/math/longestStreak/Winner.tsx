import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { RESET_GAME_LEVEL } from "../../../graphql/longestStreak/resetGameLevel";

export interface WinnerProps {
  text: string;
  onClick: () => void;
  onRestartClick: () => void;
  onSameLevelClick: () => void;
  winner: string;
  image: string;
  user: any;
}

export const Winner: React.FC<WinnerProps> = ({
  text,
  onClick,
  onRestartClick,
  onSameLevelClick,
  winner,
  image,
  user,
  ...props
}) => {
  const [resetGameLevel] = useMutation(RESET_GAME_LEVEL);

  function handleResetGameLevel() {
    resetGameLevel({
      variables: {
        userId: user.uid,
      },
      refetchQueries: [
        {
          query: RESET_GAME_LEVEL,
          variables: {
            userId: user.uid,
          },
        },
      ],
    });
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex-row items-center">
      <div className="flex justify-center animate-bounce space-y-6 py-4 bg-gradient-to-b bg-purple-700 hover:bg-purple-500 text-white px-3 font-bold text-xl border-b-4 rounded-lg active:border-b-2 cursor-pointer`">
        {winner}
      </div>
      <div className="flex justify-center"> {image}</div>
      <p className=" flex justify-center py-8">
        Remember... Practice makes perfect. Begin again!
      </p>
      <section
        className="inline-flex justify-center bg-white border border-gray-300 rounded-md cursor-pointer "
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative">
          <button
            type="button"
            className="inline-flex h-full px-2 text-gray-600 border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
          >
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
                className="flex items-center w-full px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 "
                type="submit"
                role="menuitem"
                onClick={onRestartClick}
              >
                <span className="pr-2 text-2xl"></span> Restart Game
              </button>

              <button
                className="flex items-center w-full px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 "
                type="submit"
                role="menuitem"
                onClick={onSameLevelClick}
              >
                <span className="pr-2 text-2xl"></span> Practice My Level
              </button>

              <button
                type="submit"
                className="flex items-center w-full gap-2 px-4 py-2 text-sm text-red-700 rounded-lg dark:text-red-500 dark:hover:bg-red-600/10 hover:bg-red-50"
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
