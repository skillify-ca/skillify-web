import React, { useEffect, useState } from "react";

export type CarouselProp = {};

export const Carousel: React.FC<CarouselProp> = () => {
  const [index, setIndex] = useState(2);
  const onButtonClick = (index: number) => {
    // this will be called when the user clicks between photos in the carousel
    setIndex(index);
  };

  return (
    <div>
      <div className="bg-blue-200 m-auto relative">
        <h1 className="font-bold">CSS Carousel</h1>
        {index == 0 && (
          <div>
            <div>1/3</div>
            <img
              className="h-2/5"
              src="/images/coding/units/css/Dotted-border.png"
            />
            <div> Caption </div>
          </div>
        )}
        {index == 1 && (
          <div className="h-1/5">
            <div>2/3</div>
            <img src="/images/coding/units/css/Dashed-border.png" />
            <div> Caption </div>
          </div>
        )}
        {index == 2 && (
          <div>
            <div>3/3</div>
            <img
              className="h-2/5"
              src="/images/coding/units/css/Bottom-border.png"
            />
            <div> Caption </div>
          </div>
        )}
        <a className="cursor-pointer absolute top-1/2 w-auto p-auto font-bold text-base rounded-bl-xl select-none">
          &#10094;
        </a>
        <a className="cursor-pointer absolute top-1/2 w-auto p-auto font-bold text-base rounded-tr-xl select-none right-0">
          &#10095;
        </a>
      </div>
      <div className="text-center">
        <button
          className={`cursor-pointer h-8 w-8 mx-2 my-0 inline-block rounded-md ${
            index == 0 ? "bg-gray-300" : "bg-black"
          } `}
          onClick={() => onButtonClick(0)}
        ></button>
        <button
          className={`cursor-pointer h-8 w-8 mx-2 my-0 inline-block rounded-md ${
            index == 1 ? "bg-gray-300" : "bg-black"
          } `}
          onClick={() => onButtonClick(1)}
        ></button>
        <button
          className={`cursor-pointer h-8 w-8 mx-2 my-0 inline-block rounded-md ${
            index == 2 ? "bg-gray-300" : "bg-black"
          } `}
          onClick={() => onButtonClick(2)}
        ></button>
      </div>
    </div>
  );
};
