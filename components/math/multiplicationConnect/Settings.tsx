import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  multiplicationConnectSelector,
  setNewGame,
} from "../../../redux/multiplicationConnectSlice";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [click, setClick] = useState(false);

  const { newGame } = useSelector(multiplicationConnectSelector);
  const dispatch = useDispatch();

  return (
    <section
      className="z-20 inline-flex bg-white border border-gray-300 rounded-md cursor-pointer dark:bg-gray-900 dark:border-gray-700 dark:hover:border-gray-600"
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      // onMouseOut={() => setTimeout(() => (click ? "" : setIsOpen(false)), 500)}
    >
      <a className="inline-flex items-center pl-4 pr-1 font-mono text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 dark:hover:bg-gray-800 hover:text-gray-700 hover:bg-gray-50 rounded-l-md">
        <span className="pr-2 ">🛠</span>
        <span className="mt-1 font-bold">Settings</span>
      </a>

      <div className="relative">
        <button
          type="button"
          className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-gray-100 dark:text-gray-300 dark:border-gray-700 dark:hover:text-gray-200 dark:hover:bg-gray-800 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
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
          className={`transition-opacity duration-200 absolute right-0 z-10 w-56 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg dark:bg-gray-900 dark:border-gray-800 ${
            isOpen ? "opacity-100 visible" : " opacity-0 invisible"
          }`}
          role="menu"
        >
          <div className="p-2">
            <button
              className="flex items-center w-full px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800"
              role="menuitem"
            >
              <span className="pr-2 text-2xl">👋🏼</span> Play Solo
            </button>

            <button
              className="flex items-center w-full px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800"
              role="menuitem"
            >
              <span className="pr-2 text-2xl">🫱🏼‍🫲🏽</span> Two Player Mode
            </button>

            <button
              className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800"
              role="menuitem"
            >
              <span className="pr-2 text-2xl">🌓</span>Toggle Dark Mode
            </button>

            <button
              className="flex items-center w-full px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800"
              role="menuitem"
            >
              <span className="pr-2 text-2xl">🙋🏽</span>Feature Request
            </button>

            <button
              type="submit"
              className="flex items-center w-full gap-2 px-4 py-2 text-sm text-red-700 rounded-lg dark:text-red-500 dark:hover:bg-red-600/10 hover:bg-red-50"
              role="menuitem"
              onClick={() => dispatch(setNewGame(newGame))}
            >
              <span className="text-2xl">🔄</span> Restart Game
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
