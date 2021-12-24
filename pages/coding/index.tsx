import React from "react";

export default function Coding(props) {
  const pages = [
    { title: "Reverse String", link: "/coding/reverseString" },
    { title: "Evaluate Expression", link: "/coding/evaluateExpression" },
    { title: "Word Pattern", link: "/coding/wordPattern" },
  ];

  return (
    <div className="p-4">
      <div className="flex space-x-4">
        {pages.map((page) => (
          <a href={page.link}>
            <div className="p-4 transition-all transform bg-white shadow-lg cursor-pointer rounded-xl hover:scale-110">
              {page.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
