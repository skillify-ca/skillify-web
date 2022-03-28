import { link } from "fs";
import Link from "next/link";
import React, { useState } from "react";
import { UnitNode } from "../../../pages/api/studentPortal/units";
import { Button } from "../../ui/Button";

export type UnitNodeViewProps = {
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
  hiddenLine: boolean;
  type: "lesson" | "quiz" | "assignment";
};

export const UnitNodeView: React.FC<UnitNodeViewProps> = ({
  completed,
  locked,
  hiddenLine,
  title,
  description,
  type,
}: UnitNodeViewProps) => {
  const imageSrc = (completed, locked, type) => {
    if (completed) {
      return "/images/studentPortal/checkmark.svg";
    } else if (locked) {
      return "/images/lock.png";
    } else if (type === "lesson") {
      return "/images/studentPortal/lesson_active.svg";
    } else if (type === "quiz") {
      return "/images/studentPortal/quiz_active.svg";
    } else if (type === "assignment") {
      return "/images/studentPortal/assignment_active.svg";
    }
    return "";
  };
  const active = !completed && !locked;

  return (
    <div>
      <div
        className={`${
          active
            ? "px-4 sm:px-0 py-4 border-2 flex flex-col sm:grid sm:grid-cols-12 bg-white dark:bg-gray-800"
            : "grid grid-cols-12"
        }  `}
      >
        <div className="flex flex-col items-center col-span-2">
          <div className="flex items-center rounded-full">
            {
              <img
                src={`${imageSrc(completed, locked, type)}`}
                className="w-12 h-12"
              />
            }{" "}
          </div>
        </div>
        <div className="flex flex-col justify-center w-full col-span-6">
          <p className="">{title}</p>
          <p className="">{description}</p>
        </div>
        <div
          className={`${
            active ? "" : "hidden"
          } flex flex-col col-span-4 justify-center sm:mr-4`}
        >
          <Button label="Continue" />
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div
          className={`${
            hiddenLine ? "hidden" : ""
          } flex flex-col items-center col-span-2 w-full`}
        >
          <div
            className={`h-16 w-1 ${completed ? "bg-turtwig" : "bg-gray-500"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default UnitNodeView;
