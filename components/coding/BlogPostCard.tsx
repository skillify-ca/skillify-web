import Link from "next/link";

import React from "react";

const BlogPostCard = ({ date, title, image, description, link, color }) => {
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
        className={`flex flex-col items-center justify-center h-full transition-all transform border-t-8 dark:bg-murkrow dark:text-white bg-white shadow-lg cursor-pointer rounded-xl hover:scale-110 ${getBorderColour()}`}
      >
        <img src={image} className="object-cover w-full h-40 mb-4" />
        <div className="p-4">
          <h4>{date}</h4>

          <h4 className="mb-4 font-bold">{title}</h4>
          {description}
        </div>{" "}
      </div>
    </Link>
  );
};
export default BlogPostCard;
