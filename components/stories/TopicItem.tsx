import React from "react";
import Card from "../ui/Card";
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
  accessory,
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
    <div className="" onClick={onClick}>
      <div className="bg-white shadow-md rounded-xl p-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-16 h-16 bg-purple-100 rounded-full p-1 ring-2 ring-blue-300">
            {disabled ? (
              <img src="/images/skills/lock.png" alt="" />
            ) : (
              image && <img src={image} alt="" />
            )}
          </div>
          <p className="mx-4 text-center text-2xl">{title}</p>

          {accessory && accessoryComponent}
        </div>
      </div>
    </div>
  );
};

export default TopicItem;
