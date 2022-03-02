import { link } from "fs";
import Link from "next/link";
import React, { useState } from "react";
import { UnitNode } from "../../../pages/api/studentPortal/units";

export type UnitNodeViewProps = {
  link: string;
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
  hiddenLine: boolean;
};

export const UnitNodeView: React.FC<UnitNodeViewProps> = ({
  link,
  completed,
  locked,
  hiddenLine,
  title,
  description,
}: UnitNodeViewProps) => {
  return (
    <div>
      <a href={link}>
        <div className="bg-white grid grid-cols-12">
          <div className="col-span-2 flex flex-col items-center">
            <div className="flex justify-center items-center rounded-full">
              {completed ? (
                <img
                  src="/images/studentPortal/checkmark.svg"
                  className="w-12 h-12"
                />
              ) : locked ? (
                <img src="/images/lock.png" className="w-12" />
              ) : null}
            </div>
          </div>
          <div className="flex flex-col col-span-10 w-full justify-center">
            <p>{title}</p>
            <p>{description}</p>
          </div>
          <div
            className={`${
              hiddenLine ? "hidden" : ""
            } flex flex-col items-center col-span-2 w-full`}
          >
            <div className="h-16 w-1 bg-green-500" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default UnitNodeView;
