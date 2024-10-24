import Link from "next/link";
import React from "react";

const BlogCard = ({ date, title, image, description, link, color }) => {
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
    (<Link href={link} legacyBehavior>
      <div
        className={`flex flex-col h-80 group border-t-8 hover:bg-backgroundHover transform transition-all text-textPrimary bg-backgroundPrimary shadow cursor-pointer overflow-hidden ${getBorderColour()}`}
      >
        <img
          src={image}
          className="object-cover w-full h-32 mb-4 transition-all transform group-hover:scale-110"
        />

        <div className="flex flex-col items-center px-4">
          <h4 className="mb-4 font-bold">{title}</h4>
          <p className="mb-4 text-sm">{date}</p>
          <p>{description}</p>
        </div>
      </div>
    </Link>)
  );
};
export default BlogCard;

export type CardData = {
  title: string;
  image: string;
  link: string;
  description: string;
};
