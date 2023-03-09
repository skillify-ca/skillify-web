import Link from "next/link";
import React from "react";

const Card = ({ title, image, description, link, color }) => {
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
        className={`flex flex-col items-center justify-center h-full p-12 transition-all transform border-t-8 text-textPrimary bg-backgroundPrimary shadow-lg cursor-pointer rounded-xl hover:scale-110 ${getBorderColour()}`}
      >
        <div className="flex flex-col items-center">
          <h4 className="mb-4 font-bold">{title}</h4>
          <img src={image} className="object-cover w-64 h-32 mb-4" />
        </div>
        {description}
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
