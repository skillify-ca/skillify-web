import Link from "next/link";
import React from "react";

const BlogPost = ({ date, title, image, description, link, color }) => {
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
        className={`flex flex-col-reverse sm:flex-row group p-2 justify-between items-center border-t-0 hover:bg-backgroundHover transition-all transform text-textPrimary bg-backgroundPrimary shadow cursor-pointer overflow-hidden ${getBorderColour()}`}
      >
        <div className="flex flex-col px-4">
          <h4 className="mb-0 font-bold">{title}</h4>
          <p className="mb-4 text-sm">{date}</p>
          <p>{description}</p>
          <p className="text-brandPrimary">Read Article</p>
        </div>
        <img
          src={image}
          className="object-cover w-32 h-32 transition-all transform border-2 "
        />
      </div>
    </Link>
  );
};
export default BlogPost;

export type CardData = {
  title: string;
  image: string;
  link: string;
  description: string;
};
