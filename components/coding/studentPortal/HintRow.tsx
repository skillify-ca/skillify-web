import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState } from "react";

export type HintRowProps = {
  description: string;
  link?: string;
};

export const HintRow: React.FC<HintRowProps> = ({
  description,
  link,
}: HintRowProps) => {
  const [showHint, setShowHint] = useState(false);
  const handleViewClick = () => {
    setShowHint(!showHint);
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
        <p className={showHint ? "text-black" : "text-white"}>
          {description} {link && <Link href={link}>(link)</Link>}
        </p>
      </div>
      <div className="flex items-center sm:justify-end"></div>
    </div>
  );
};

export default HintRow;
