import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";

export interface DotProps {
  exists: boolean;
  visible: boolean;
}

const Dot = ({ exists = true, visible = true }: DotProps) => {
  return (
    exists && (
      <div
        className={`${
          visible ? "opacity-100" : "opacity-0"
        } rounded-full h-8 w-8 flex items-center justify-center bg-red-400 border-black`}
      ></div>
    )
  );
};

export interface DiceDotsProps {
  value: number;
}

const DiceDots = ({ value = 0 }: DiceDotsProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <Dot
          exists={getDotProps(value, 0).exists}
          visible={getDotProps(value, 0).visible}
        />
        <Dot
          exists={getDotProps(value, 1).exists}
          visible={getDotProps(value, 1).visible}
        />
        <Dot
          exists={getDotProps(value, 2).exists}
          visible={getDotProps(value, 2).visible}
        />
        <Dot
          exists={getDotProps(value, 3).exists}
          visible={getDotProps(value, 3).visible}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Dot
          exists={getDotProps(value, 4).exists}
          visible={getDotProps(value, 4).visible}
        />
        <Dot
          exists={getDotProps(value, 5).exists}
          visible={getDotProps(value, 5).visible}
        />
        <Dot
          exists={getDotProps(value, 6).exists}
          visible={getDotProps(value, 6).visible}
        />
        <Dot
          exists={getDotProps(value, 7).exists}
          visible={getDotProps(value, 7).visible}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Dot
          exists={getDotProps(value, 8).exists}
          visible={getDotProps(value, 8).visible}
        />
        <Dot
          exists={getDotProps(value, 9).exists}
          visible={getDotProps(value, 9).visible}
        />
        <Dot
          exists={getDotProps(value, 10).exists}
          visible={getDotProps(value, 10).visible}
        />
        <Dot
          exists={getDotProps(value, 11).exists}
          visible={getDotProps(value, 11).visible}
        />
      </div>
    </div>
  );
};

const getDotProps = (value: number, id: number) => {
  const existanceMap = [
    [
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
    ], // Dot 0
    [
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: true },
      { visible: false, exists: true },
    ], // Dot 1
    [
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: true },
      { visible: true, exists: true },
    ], // Dot 2
    [
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
    ], // Dot 3
    [
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
    ], // Dot 4
    [
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
    ], // Dot 5
    [
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
    ], // Dot 6
    [
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
    ], // Dot 7
    [
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
    ], // Dot 8
    [
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: false },
      { visible: false, exists: false },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
    ], // Dot 9
    [
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: false },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
    ], // Dot 10
    [
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: false, exists: false },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
      { visible: true, exists: true },
    ], // Dot 11
  ];
  return existanceMap[value][id];
};
export default DiceDots;
