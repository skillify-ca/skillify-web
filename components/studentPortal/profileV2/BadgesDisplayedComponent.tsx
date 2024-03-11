import React from "react";

export type BadgesDisplayedComponentProps = {
  earnedBadges: number;
  totalBadges: number;
  textSize: "small" | "medium" | "large";
};

export default function BadgesDisplayedComponent({
  earnedBadges,
  totalBadges,
  textSize,
}: BadgesDisplayedComponentProps) {
  let textStyle;
  switch (textSize) {
    case "small":
      textStyle = "flex text-sm md:text-sm";
      break;
    case "medium":
      textStyle = "flex text-base md:text-md";
      break;
    case "large":
      textStyle = "flex text-base md:text-lg";
      break;
  }
  return (
    <>
      <p className={textStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-rattata"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25a4.49 4.49 0 00-3.397 1.549 4.49 4.49 0 00-3.497 1.307 4.49 4.49 0 00-1.307 3.497A4.49 4.49 0 002.25 12c0 1.357.6 2.573 1.548 3.397a4.491 4.491 0 001.307 3.498A4.49 4.49 0 008.603 20.2 4.49 4.49 0 0012 21.75a4.49 4.49 0 003.397-1.549 4.491 4.491 0 003.497-1.307 4.491 4.491 0 001.307-3.497A4.49 4.49 0 0021.75 12a4.49 4.49 0 00-1.548-3.397 4.491 4.491 0 00-1.307-3.497 4.49 4.49 0 00-3.498-1.307A4.49 4.49 0 0012 2.25zm3.059 8.062a.75.75 0 10-.993-1.124 12.785 12.785 0 00-3.209 4.358L9.53 12.22a.75.75 0 00-1.06 1.06l2.135 2.136a.75.75 0 001.24-.289 11.264 11.264 0 013.214-4.815z"
            clipRule="evenodd"
          />
        </svg>

        <span className="ml-2">
          {earnedBadges}/{totalBadges} Badges Unlocked
        </span>
      </p>
    </>
  );
}
