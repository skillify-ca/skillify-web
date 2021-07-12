import React, { useEffect, useState } from "react";

export interface TenFrameProp {
  num: number;
}

export const TenFrame: React.FC<TenFrameProp> = ({ num, ...props }) => {
  const [circle1, setCircle1] = useState("bg-transparent");
  const [circle2, setCircle2] = useState("bg-transparent");
  const [circle3, setCircle3] = useState("bg-transparent");
  const [circle4, setCircle4] = useState("bg-transparent");
  const [circle5, setCircle5] = useState("bg-transparent");
  const [circle6, setCircle6] = useState("bg-transparent");
  const [circle7, setCircle7] = useState("bg-transparent");
  const [circle8, setCircle8] = useState("bg-transparent");
  const [circle9, setCircle9] = useState("bg-transparent");
  const [circle10, setCircle10] = useState("bg-transparent");

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
  }, [num]);

  return (
    <div className="flex flex-col gap-0">
      <div className="inline-flex border-4 m-0 relative">
        <div
          className={`rounded-full h-6 w-6 flex items-center justify-center ${circle1} border-black relative`}
        ></div>
        <div className="border-r-2"></div>
        <div
          className={`rounded-full h-6 w-6 flex items-center justify-center ${circle2} border-black `}
        ></div>
        <div className="border-r-2"></div>
        <div
          className={`rounded-full h-6 w-6 flex items-center justify-center ${circle3} border-black `}
        ></div>
        <div className="border-r-2"></div>
        <div
          className={`rounded-full h-6 w-6 flex items-center justify-center ${circle4} border-black `}
        ></div>
        <div className="border-r-2"></div>
        <div
          className={`rounded-full h-6 w-6 flex items-center justify-center ${circle5} border-black `}
        ></div>
      </div>
      <div className="inline-flex border-4 m-0">
        <div
          className={`rounded-full h-6 w-6 flex items-center justify-center ${circle6} border-black relative`}
        ></div>
        <div className="border-r-2"></div>
        <div
          className={`rounded-full h-6 w-6 flex items-center justify-center ${circle7} border-black `}
        ></div>{" "}
        <div className="border-r-2"></div>
        <div
          className={`rounded-full h-6 w-6 flex items-center justify-center ${circle8} border-black `}
        ></div>{" "}
        <div className="border-r-2"></div>
        <div
          className={`rounded-full h-6 w-6 flex items-center justify-center ${circle9} border-black `}
        ></div>{" "}
        <div className="border-r-2"></div>
        <div
          className={`rounded-full h-6 w-6 flex items-center justify-center ${circle10} border-black `}
        ></div>{" "}
      </div>
    </div>
  );
};

export function colourSetter(colourArr, num) {
  let i = 0;

  for (i = 0; i < num; ++i) {
    if (colourArr[i] !== null) {
      colourArr[i]("bg-red-400");
    }
  }
  for (i; i < 10; ++i) {
    if (colourArr[i] !== null) {
      colourArr[i]("bg-transparent");
    }
  }
}

export default TenFrame;
