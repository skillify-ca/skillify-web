import React from "react";
import { DotTypes } from "./DotTypes";

export interface DotProps {
  dotType: DotTypes;
}

const Dot = ({ dotType }: DotProps) => {
  const getDisplayColor = (dotType: DotTypes) => {
    const topDotColour = "bg-red-400";
    const bottomDotColour = "bg-blue-400";
    let displayColour;
    if (dotType == DotTypes.TOPCOLOUR) {
      displayColour = topDotColour;
    } else if (dotType == DotTypes.BOTTOMCOLOUR) {
      displayColour = bottomDotColour;
    } else {
      displayColour = "opacity-0";
    }

    return displayColour;
  };

  return (
    <div
      className={`rounded-full shadow-md h-4 w-4  ${getDisplayColor(
        dotType
      )} border-black`}
    ></div>
  );
};

export interface DualColourProps {
  value: number;
}

const DualColourDots = ({ value = 0 }: DualColourProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <Dot dotType={getDotType(0, value)} />
        <Dot dotType={getDotType(1, value)} />
        <Dot dotType={getDotType(2, value)} />
        <Dot dotType={getDotType(3, value)} />
      </div>
      <div className="flex flex-col gap-4">
        <Dot dotType={getDotType(4, value)} />
        <Dot dotType={getDotType(5, value)} />
        <Dot dotType={getDotType(6, value)} />
        <Dot dotType={getDotType(7, value)} />
      </div>
      <div className="flex flex-col gap-4">
        <Dot dotType={getDotType(8, value)} />
        <Dot dotType={getDotType(9, value)} />
        <Dot dotType={getDotType(10, value)} />
        <Dot dotType={getDotType(11, value)} />
      </div>
      <div className="flex flex-col gap-4">
        <Dot dotType={getDotType(12, value)} />
        <Dot dotType={getDotType(13, value)} />
        <Dot dotType={getDotType(14, value)} />
        <Dot dotType={getDotType(15, value)} />
      </div>
    </div>
  );
};

const getDotType = (id: number, value: number) => {
  const existanceMap = [
    [
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
    ], // Dot 0
    [
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
    ], // Dot 1
    [
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
    ], // Dot 2
    [
      DotTypes.INVISIBLE,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.INVISIBLE,
    ], // Dot 3
    [
      DotTypes.INVISIBLE,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.INVISIBLE,
    ], // Dot 4
    [
      DotTypes.INVISIBLE,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.INVISIBLE,
    ], // Dot 5
    [
      DotTypes.INVISIBLE,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.INVISIBLE,
    ], // Dot 6
    [
      DotTypes.INVISIBLE,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.INVISIBLE,
    ], // Dot 7
    [
      DotTypes.INVISIBLE,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.INVISIBLE,
    ], // Dot 8
    [
      DotTypes.INVISIBLE,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.INVISIBLE,
    ], // Dot 9
    [
      DotTypes.INVISIBLE,
      DotTypes.TOPCOLOUR,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.INVISIBLE,
      DotTypes.TOPCOLOUR,
      DotTypes.INVISIBLE,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.BOTTOMCOLOUR,
      DotTypes.INVISIBLE,
    ], // Dot 10
    [
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
    ], // Dot 11
    [
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
    ], // Dot 12
    [
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
    ],
    [
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
    ], // Dot 14
    [
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
      DotTypes.TOPCOLOUR,
    ], // Dot 15
  ];

  return existanceMap[value][id];
};

export default DualColourDots;
