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
        <Dot dotType={getDotType(value, 0)} />
        <Dot dotType={getDotType(value, 1)} />
        <Dot dotType={getDotType(value, 2)} />
        <Dot dotType={getDotType(value, 3)} />
      </div>
      <div className="flex flex-col gap-4">
        <Dot dotType={getDotType(value, 4)} />
        <Dot dotType={getDotType(value, 5)} />
        <Dot dotType={getDotType(value, 6)} />
        <Dot dotType={getDotType(value, 7)} />
      </div>
      <div className="flex flex-col gap-4">
        <Dot dotType={getDotType(value, 8)} />
        <Dot dotType={getDotType(value, 9)} />
        <Dot dotType={getDotType(value, 10)} />
        <Dot dotType={getDotType(value, 11)} />
      </div>
      <div className="flex flex-col gap-4">
        <Dot dotType={getDotType(value, 12)} />
        <Dot dotType={getDotType(value, 13)} />
        <Dot dotType={getDotType(value, 14)} />
        <Dot dotType={getDotType(value, 15)} />
      </div>
    </div>
  );
};

const getDotType = (value: number, id: number) => {
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
    ], // 0 dots
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
    ], // 1 dot
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
