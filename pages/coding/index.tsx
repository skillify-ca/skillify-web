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
    { name: "Word Pattern", link: "Word Pattern" },
  ];
  return (
    <div>
      {lessons.map((lesson) => (
        <div className="p-4">{lesson.name}</div>
      ))}
    </div>
  );
}
