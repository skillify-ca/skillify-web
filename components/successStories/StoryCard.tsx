import Link from "next/link";
import React from "react";

const StoryCard = ({ title, image, description, link }) => {
  return (
    <Link href={link}>
      <div
        className={`flex flex-col transition-all transform text-textPrimary bg-backgroundPrimary shadow-lg cursor-pointer hover:scale-110`}
      >
        <img src={image} className="object-cover w-full h-80" />

        <div className="flex flex-col h-24 p-4">
          <h4 className=" pb-4 font-bold">{title}</h4>
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
