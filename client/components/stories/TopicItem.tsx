import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./Button";
import StarRating from "./Rating";

export type TopicItemProps = {
  title: string;
  accessory?: "rating" | "completed" | "progress";
  image?: string;
  disabled?: boolean;
  rating?: number;
  onClick?: () => void;
};

export const TopicItem: React.FC<TopicItemProps> = ({
  title,
  accessory = "rating",
  image,
  disabled,
  rating,
  onClick,
}: TopicItemProps) => {
  let accessoryComponent;
  switch (accessory) {
    case "rating":
      accessoryComponent = <StarRating rating={rating} width={8} />;
      break;
    case "completed":
      accessoryComponent = (
        <img src={"images/checkmark.png"} alt="skill image" className="w-8" />
      );
      break;
    case "progress":
      accessoryComponent = (
        <img src={"images/progress.png"} alt="skill image" className="w-8" />
      );
      break;
  }
  return (
    <div className="w-72">
      <div
        className={`gap-0 flex justify-between rounded-full items-center h-16 w-72 ${
          disabled ? "bg-gray-300" : "bg-white shadow-md "
        } p-4 text-center rounded-xl`}
        onClick={onClick}
      >
        <div className="w-8 h-8 bg-purple-100 rounded-full p-1 ring-2 ring-blue-300">
          {disabled ? (
            <img src="/images/skills/lock.png" alt="" />
          ) : (
            image && <img src={image} alt="" />
          )}
        </div>
        <p className="mx-4">{title}</p>

        {accessoryComponent}
      </div>
    </div>
  );
};

export default TopicItem;
