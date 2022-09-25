import React, { FC, useState, useEffect } from "react";
import {
  getRndInteger,
  getRndTenthsDecimal,
  getRndHundredthsDecimal,
  getRandomItemFromArray,
} from "../../../api/random";

const diceRoll = () => {
  Math.floor(Math.random() * 6 + 1);
  const die = getRandomItemFromArray([
    "⚀ 1 ⚀",
    "⚁ 2 ⚁",
    "⚂ 3 ⚂",
    "⚃ 4 ⚃",
    "⚄ 5 ⚄",
    "⚅ 6 ⚅",
  ]);
  return die;
};

export interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?:
    | "blue"
    | "green"
    | "red"
    | "purple"
    | "pink"
    | "yellow"
    | "orange"
    | "white";
  /**
   * What text color to use
   * Can be white, black, gray-500, blue-200, blue-900, red-500, etc..
   */
  textColor?: string;
  /**
   * Button contents
   */
  label: string;
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: (e) => void;
  size?: "small" | "medium" | "large";
}

export const PlayerSection: React.FC = () => {
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
      </div>
    </div>
  );
};

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  backgroundColor = "primary",
  textColor = "white",
  label,
  disabled = false,
  onClick,
  size = "medium",
  ...props
}) => {
  let backgroundStyles;
  switch (backgroundColor) {
    case "primary":
      backgroundStyles = "bg-charmander hover:bg-pikachu-500";
      break;
    case "blue":
      backgroundStyles = "bg-blue-500 border-blue-900 hover:bg-blue-400";
      break;
    case "green":
      backgroundStyles =
        "bg-green-500 via-green-400 to-green-500 border-green-900 hover:bg-green-400";
      break;
    case "red":
      backgroundStyles =
        "bg-red-500 via-red-400 to-red-500 border-red-900 hover:bg-red-400";
      break;
    case "purple":
      backgroundStyles =
        "bg-purple-500 via-purple-400 to-purple-500 border-purple-900 hover:bg-purple-400";
      break;
    case "pink":
      backgroundStyles =
        "bg-pink-500 via-pink-400 to-pink-500 border-pink-900 hover:bg-pink-400";
      break;
    case "yellow":
      backgroundStyles =
        "bg-yellow-500 via-yellow-400 to-yellow-500 border-yellow-900 hover:bg-yellow-400";
      break;
    case "white":
      backgroundStyles = "bg-white border-gray-300 border-2 hover:bg-blue-400";
      break;
  }
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={disabled ? null : onClick}
      className={`bg-gradient-to-b px-4 font-bold border-b-4 rounded-lg ${
        size === "large" ? "w-48 py-4 h-16" : "w-36 py-2 h-12"
      } 
      ${disabled ? "bg-gray-400" : backgroundStyles}
      ${disabled ? "" : "active:border-b-2"}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
      {...props}
    >
      <p
        className={`${disabled ? "text-gray-50" : "text-" + textColor} ${
          size === "large" ? "text-xl" : "text-base"
        }`}
      >
        {label}
      </p>
    </button>
  );
};

const DiceSection: FC = () => {
  const [roll1, setRoll1] = useState("⚀⚁⚂⚃⚄⚅");
  const [roll2, setRoll2] = useState("⚀⚁⚂⚃⚄⚅");

  return (
    <div className="flex items-center justify-evenly text-2xl">
      <div className="flex flex-col items-center justify-center w-52 h-48 gap-3 border-2">
        <div className="flex flex-col gap-3">
          <Button
            label={"Roll Die"}
            onClick={() => {
              setRoll1(diceRoll);
            }}
          />
        </div>
        <p className="text-sm text-white place-content-center">
          <input
            className="bg-inherit placeholder:text-inherit text-center"
            placeholder="Enter Player 1's Name"
          ></input>
        </p>
        <p className="text-10xl text-white">{roll1}</p>
      </div>

      <div className="flex flex-col items-center justify-center w-52 h-48 gap-3 border-2">
        <Button
          label={"Roll Die"}
          onClick={() => {
            setRoll2(diceRoll);
          }}
        />
        <p className="text-sm text-white place-content-center">
          <input
            className="bg-inherit placeholder:text-inherit text-center"
            placeholder="Enter Player 2's Name"
          ></input>
        </p>
        <h1 className="text-2xl text-white">{roll2}</h1>
      </div>

      <div className="flex flex-col items-center gap-5"></div>
    </div>
  );
};

const Index = () => {
  return <DiceSection />;
};

export default Index;
