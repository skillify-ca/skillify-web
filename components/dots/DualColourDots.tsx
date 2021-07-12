import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";
import { randomize } from "../../pages/api/questionGenerator";
import { DotTypes } from "./DotTypes";

export interface DotProps {
  colour: DotTypes;
}

const Dot = ({ colour }: DotProps) => {
  let topDotColour = "bg-red-400";
  let bottomDotColour = "bg-blue-400";
  let displayColour;
  if (colour == DotTypes.TOPCOLOUR) {
    displayColour = topDotColour;
  } else if (colour == DotTypes.BOTTOMCOLOUR) {
    displayColour = bottomDotColour;
  } else {
    displayColour = "opacity-0";
  }

  return (
    <div
      className={`rounded-full shadow-md h-4 w-4  ${displayColour} border-black`}
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
        <Dot colour={getDotProps(0, value)} />
        <Dot colour={getDotProps(1, value)} />
        <Dot colour={getDotProps(2, value)} />
        <Dot colour={getDotProps(3, value)} />
      </div>
      <div className="flex flex-col gap-4">
        <Dot colour={getDotProps(4, value)} />
        <Dot colour={getDotProps(5, value)} />
        <Dot colour={getDotProps(6, value)} />
        <Dot colour={getDotProps(7, value)} />
      </div>
      <div className="flex flex-col gap-4">
        <Dot colour={getDotProps(8, value)} />
        <Dot colour={getDotProps(9, value)} />
        <Dot colour={getDotProps(10, value)} />
        <Dot colour={getDotProps(11, value)} />
      </div>
      <div className="flex flex-col gap-4">
        <Dot colour={getDotProps(12, value)} />
        <Dot colour={getDotProps(13, value)} />
        <Dot colour={getDotProps(14, value)} />
        <Dot colour={getDotProps(15, value)} />
      </div>
    </div>
  );
};

const getDotProps = (id: number, value: number) => {
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
