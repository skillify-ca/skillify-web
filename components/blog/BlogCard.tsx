import Link from "next/link";
import React from "react";

const Card = ({ date, title, image, description, link, color }) => {
  const getBorderColour = () => {
    if (color === 0) {
      return "border-charmander";
    } else if (color === 1) {
      return "border-rattata";
    } else if (color === 2) {
      return "border-pikachu-500";
    } else if (color === 3) {
      return "border-murkrow";
    }
  };

  return (
    <Link href={link}>
      <div
        className={`flex flex-col h-80 transition-all transform border-t-8 text-textPrimary bg-backgroundPrimary shadow-lg cursor-pointer rounded-xl hover:scale-110 ${getBorderColour()}`}
      >
        <img src={image} className="object-cover w-full h-32 mb-4" />

        <div className="flex flex-col items-center p-4">
          <h4 className="mb-4 font-bold">{title}</h4>
          <p className="mb-4 text-sm">{date}</p>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};
export default Card;

export type CardData = {
  title: string;
  image: string;
  link: string;
  description: string;
};
