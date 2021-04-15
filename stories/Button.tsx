import React from "react";

export interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: "blue" | "green" | "red" | "purple" | "pink" | "yellow";
  /**
   * What text color to use
   * Can be white, black, gray-500, blue-200, blue-900, red-500, etc..
   */
   textColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  textColor,
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`bg-gradient-to-b from-${backgroundColor}-300 via-${backgroundColor}-400 to-${backgroundColor}-500 p-2 w-20 m-4 border-b-4 border-${backgroundColor}-900 rounded-xl hover:from-${backgroundColor}-200 active:border-b-2`}
      {...props}
    >
      <span className={`text-${textColor}`}>{label}</span>
    </button>
  );
};
