import React from "react";

export interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?:
    | "primary"
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

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  backgroundColor = "primary",
  textColor = "text-white",
  label,
  disabled = false,
  onClick,
  size = "medium",
  ...props
}) => {
  let backgroundStyles;
  switch (backgroundColor) {
    case "primary":
      backgroundStyles = "bg-brandPrimary hover:bg-pikachu-500";
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
      backgroundStyles =
        "bg-white border-gray-300 border-2 hover:bg-gray-200 text-orange-400";
      break;
  }
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={disabled ? null : onClick}
      className={`max-w-full bg-gradient-to-b px-4 font-bold border-b-4 rounded-lg ${
        size === "large" ? "w-48 py-4 h-16" : "w-36 py-2 h-12"
      } 
      ${disabled ? "bg-gray-400" : backgroundStyles}
      ${disabled ? "" : "active:border-b-2"}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
      {...props}
    >
      <p className={`${disabled ? "text-gray-50" : textColor}`}>{label}</p>
    </button>
  );
};
