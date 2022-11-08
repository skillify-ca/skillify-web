import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../ui/Button";

export type HintRowProps = {
  icon?: string;
  description: string;
  disabled: boolean;
  link?: string;
};

export const HintRow: React.FC<HintRowProps> = ({
  icon,
  description,
  disabled,
  link,
}: HintRowProps) => {
  const [showHint, setShowHint] = useState<boolean>();
  const [showDescription, setShowDescription] = useState<boolean>();
  const handleViewClick = () => {
    setShowHint(!showHint);
    setShowDescription(!showDescription);
    console.log("hint" + showHint);
  };
  return (
    <div className="grid grid-cols-1 gap-4 p-6 bg-white shadow-lg dark:bg-gray-900 lg:grid-cols-resource-row">
      <div className="flex items-center">
        <ArrowCircleRightIcon
          className={
            showHint
              ? "h-8 w-8 mr-2  text-yellow-600 cursor-pointer hover:text-yellow-600"
              : " mr-2 h-8 w-8 cursor-pointer hover:text-yellow-600"
          }
          onClick={handleViewClick}
        />
      </div>
      <div className="flex flex-col">
        <p
          className={
            showDescription ? "text-black dark: text-white" : "text-black"
          }
        >
          {description}
        </p>
      </div>
      <div className="flex items-center sm:justify-end"></div>
    </div>
  );
};

export default HintRow;
