import Link from "next/link";
import React from "react";

const StoryCard = ({ title, image, description, link }) => {
  return (
    <Link href={link}>
      <div
        className={`flex flex-col text-textPrimary bg-white shadow-lg cursor-pointer group overflow-clip`}
      >
        <div className="h-80 overflow-clip">
          <img
            src={image}
            className="object-cover w-full transition-all transform h-80 group-hover:scale-110 overflow-clip"
          />
        </div>

        <div className="flex flex-col p-4 h-28">
          <h4 className="pb-2 font-bold ">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};
export default StoryCard;

export type CardData = {
  title: string;
  image: string;
  link: string;
  description: string;
};
