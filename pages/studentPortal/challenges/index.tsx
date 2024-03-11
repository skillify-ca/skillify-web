import Link from "next/link";
import React from "react";

export default function Coding() {
  const lessons = [
    { name: "Evaluate Expression", link: "evaluateExpression" },
    {
      name: "Minimum Number Of Frogs Croaking",
      link: "minimumNumberOfFrogsCroaking",
    },
    { name: "Reverse String", link: "reverseString" },
    { name: "Richest Customer Wealth", link: "richestCustomerWealth" },
    { name: "Word Pattern", link: "wordPattern" },
  ];
  return (
    <div>
      {lessons.map((lesson) => (
        <Link
          key={lesson.link}
          href={`/studentPortal/challenges/${lesson.link}`}
        >
          <div className="p-4 border cursor-pointer hover:bg-sky-300">
            {lesson.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
