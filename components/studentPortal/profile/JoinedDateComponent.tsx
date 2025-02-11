import { format } from "date-fns";
import React from "react";

export type JoinedDateComponentProps = {
  createdAt: Date;
  textSize: "small" | "medium" | "large";
};

export default function JoinedDateComponent({
  createdAt,
  textSize,
}: JoinedDateComponentProps) {
  let textStyle;
  switch (textSize) {
    case "small":
      textStyle = "ml-2 text-sm md:text-sm";
      break;
    case "medium":
      textStyle = "ml-2 text-base md:text-base";
      break;
    case "large":
      textStyle = "ml-2 text-md md:text-lg";
      break;
  }
  return (
    <>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-charmander"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
            clipRule="evenodd"
          />
        </svg>

        <span className={textStyle}>
          {createdAt
            ? "Joined " + format(new Date(createdAt), "MMMM yyyy")
            : createdAt}
        </span>
      </div>
    </>
  );
}
