import React from "react";
import Card from "../ui/Card";
import StarRating from "./Rating";

export type UnitItemProps = {
  title: string;
  accessory?: "rating" | "completed" | "progress";
  image?: string;
  disabled?: boolean;
  rating?: number;
  onClick?: () => void;
};

export const UnitItem: React.FC<UnitItemProps> = ({
  title,
  accessory,
  image,
  disabled,
  rating,
  onClick,
}: UnitItemProps) => {
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
    <div className="rounded-xl shadow-xl bg-white h-full" onClick={onClick}>
      <div className="p-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-16 h-16 bg-purple-100 rounded-full p-1 ring-2 ring-blue-300 flex">
            {disabled ? (
              <img src="/images/skills/lock.png" alt="" />
            ) : (
              image && <img src={image} alt="" />
            )}
          </div>
          <p className="mx-4 text-center text-xl">{title}</p>

          {accessory && accessoryComponent}
        </div>
      </div>
    </div>
  );
};

export default UnitItem;
