import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Quiz = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [index, setIndex] = useState(0);
  const data = {
    "NA1-02": [
      {
        question:
          "What is the volume of a cube (V = s^3) with a side length of 4",
        choices: [
          { text: "64", isCorrect: true },
          { text: "16", isCorrect: false },
          { text: "256", isCorrect: false },
          { text: "40", isCorrect: false },
        ],
      },
      {
        question:
          "What is the area of a square (A = s^2) with a side length of 8",
        choices: [
          { text: "64", isCorrect: true },
          { text: "16", isCorrect: false },
          { text: "256", isCorrect: false },
          { text: "40", isCorrect: false },
        ],
      },
      {
        question:
          "What is the volume of a cylinder (V = h * pi * r^2) with a height of 10 and radius of 5",
        choices: [
          { text: "785", isCorrect: true },
          { text: "780", isCorrect: false },
          { text: "2000", isCorrect: false },
          { text: "2090", isCorrect: false },
        ],
      },
    ],
    "NA1-01": [
      {
        question: "What is (9.8)^3",
        choices: [
          { text: "96", isCorrect: false },
          { text: "940", isCorrect: false },
          { text: "941", isCorrect: true },
          { text: "960", isCorrect: false },
        ],
      },
      {
        question: "What is 7^2",
        choices: [
          { text: "25", isCorrect: false },
          { text: "94360", isCorrect: false },
          { text: "49", isCorrect: true },
          { text: "42", isCorrect: false },
        ],
      },
      {
        question: "What is (1/2)^4",
        choices: [
          { text: "1/2", isCorrect: false },
          { text: "1/4", isCorrect: false },
          { text: "1/8", isCorrect: false },
          { text: "1/16", isCorrect: true },
        ],
      },
    ],
    "NA1-03": [
      {
        question: "Simplify x^3 * x^10",
        choices: [
          { text: "x^7", isCorrect: false },
          { text: "x^30", isCorrect: false },
          { text: "x^13", isCorrect: true },
          { text: "x^3", isCorrect: false },
        ],
      },
      {
        question: "Evaluate x^15 * x^(-20) * x^(5)",
        choices: [
          { text: "1", isCorrect: true },
          { text: "0", isCorrect: false },
          { text: "Impossible to tell", isCorrect: false },
          { text: "40", isCorrect: false },
        ],
      },
      {
        question: "If 2^a * 2^b = 64, then what are possible values for a and b?",
        choices: [
          { text: "3 and 4", isCorrect: false },
          { text: "2 and 4", isCorrect: true },
          { text: "1 and 6", isCorrect: false },
          { text: "6 and 4", isCorrect: false },
        ],
      },
    ],
  };

  const question = data[slug][index];

  const onClick = (e) => {
    if (index >= data[slug].length - 1) {
      e.preventDefault();
      router.push("/skill/" + slug);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <div className="bg-pink-500 p-4 m-4">Quiz {47 + index} / 50</div>
      <div className="p-4 m-4 bg-purple-500">{data[slug][index].question}</div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div onClick={onClick} className="p-4 m-4 bg-red-500">
          {data[slug][index].choices[0].text}
        </div>
        <div onClick={onClick} className="p-4 m-4 bg-green-500">
          {data[slug][index].choices[1].text}
        </div>
        <div onClick={onClick} className="p-4 m-4 bg-blue-500">
          {data[slug][index].choices[2].text}
        </div>
        <div onClick={onClick} className="p-4 m-4 bg-yellow-500">
          {data[slug][index].choices[3].text}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
