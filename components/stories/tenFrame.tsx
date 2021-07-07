import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";

export interface TenFrameProp {
  num: number;
}

export const TenFrame: React.FC<TenFrameProp> = ({ num, ...props }) => {
  const [circle1, setCircle1] = useState("bg-white");
  const [circle2, setCircle2] = useState("bg-white");
  const [circle3, setCircle3] = useState("bg-white");
  const [circle4, setCircle4] = useState("bg-white");
  const [circle5, setCircle5] = useState("bg-white");
  const [circle6, setCircle6] = useState("bg-white");
  const [circle7, setCircle7] = useState("bg-white");
  const [circle8, setCircle8] = useState("bg-white");
  const [circle9, setCircle9] = useState("bg-white");
  const [circle10, setCircle10] = useState("bg-white");

  const colourSetterArr = [
    setCircle1,
    setCircle2,
    setCircle3,
    setCircle4,
    setCircle5,
    setCircle6,
    setCircle7,
    setCircle8,
    setCircle9,
    setCircle10,
  ];

  useEffect(() => {
    colourSetter(colourSetterArr, num);
  }, []);

  return (
    <div>
      <div className="inline-flex border-8 m-0 space-x-4 relative">
        <div
          className={`rounded-full h-24 w-24 flex items-center justify-center ${circle1} border-black relative`}
        ></div>
        <div className="border-r-8"></div>
        <div
          className={`rounded-full h-24 w-24 flex items-center justify-center ${circle2} border-black `}
        ></div>
        <div className="border-r-8"></div>
        <div
          className={`rounded-full h-24 w-24 flex items-center justify-center ${circle3} border-black `}
        ></div>
        <div className="border-r-8"></div>
        <div
          className={`rounded-full h-24 w-24 flex items-center justify-center ${circle4} border-black `}
        ></div>
        <div className="border-r-8"></div>
        <div
          className={`rounded-full h-24 w-24 flex items-center justify-center ${circle5} border-black `}
        ></div>
      </div>
      <div className="inline-flex border-8 m-0 space-x-4">
        <div
          className={`rounded-full h-24 w-24 flex items-center justify-center ${circle6} border-black relative`}
        ></div>
        <div className="border-r-8"></div>
        <div
          className={`rounded-full h-24 w-24 flex items-center justify-center ${circle7} border-black `}
        ></div>{" "}
        <div className="border-r-8"></div>
        <div
          className={`rounded-full h-24 w-24 flex items-center justify-center ${circle8} border-black `}
        ></div>{" "}
        <div className="border-r-8"></div>
        <div
          className={`rounded-full h-24 w-24 flex items-center justify-center ${circle9} border-black `}
        ></div>{" "}
        <div className="border-r-8"></div>
        <div
          className={`rounded-full h-24 w-24 flex items-center justify-center ${circle10} border-black `}
        ></div>{" "}
      </div>
    </div>
  );
};

export function colourSetter(colourArr, num) {
  for (let i = 0; i < num; ++i) {
    colourArr[i]("bg-red-400");
    console.log(i);
  }
}

export default TenFrame;
