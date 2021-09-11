import React from "react";

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
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  textColor,
  label,
  disabled = false,
  onClick,
  ...props
}) => {
  let backgroundStyles;
  switch (backgroundColor) {
    case "blue":
      backgroundStyles =
        "from-blue-500 via-blue-500 to-blue-500 border-blue-900 hover:from-blue-400";
      break;
    case "green":
      backgroundStyles =
        "from-green-300 via-green-400 to-green-500 border-green-900 hover:from-green-200";
      break;
    case "red":
      backgroundStyles =
        "from-red-300 via-red-400 to-red-500 border-red-900 hover:from-red-200";
      break;
    case "purple":
      backgroundStyles =
        "from-purple-300 via-purple-400 to-purple-500 border-purple-900 hover:from-purple-200";
      break;
    case "pink":
      backgroundStyles =
        "from-pink-300 via-pink-400 to-pink-500 border-pink-900 hover:from-pink-200";
      break;
    case "yellow":
      backgroundStyles =
        "from-yellow-300 via-yellow-400 to-yellow-500 border-yellow-900 hover:from-yellow-200";
      break;
    case "white":
      backgroundStyles = "bg-white border-gray-300 border-2 hover:from-blue-200";
      break;
  }
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={disabled ? null : onClick}
      className={`bg-gradient-to-b px-4 py-2 font-bold border-b-4 rounded-xl 
      ${disabled ? "bg-gray-400" : backgroundStyles}
      ${disabled ? "" : "active:border-b-2"}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
      {...props}
    >
      <span className={`${disabled ? "text-gray-50" : "text-" + textColor}`}>
        {label}
      </span>
    </button>
  );
};
