import Link from "next/link";
import React from "react";
import { Button } from "../../ui/Button";
import NodeIcon from "../../ui/NodeIcon";

export type UnitNodeViewProps = {
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
  hiddenLine: boolean;
  type: "lesson" | "quiz" | "assignment";
  course: string;
  link: string;
};

export const UnitNodeView: React.FC<UnitNodeViewProps> = ({
  completed,
  locked,
  hiddenLine,
  title,
  description,
  type,
  link,
  course,
}: UnitNodeViewProps) => {
  const active = !completed && !locked;

  return (
    <div className="grid grid-cols-12 h-36">
      <div
        className={`
        col-span-12 grid grid-cols-12 h-28
        ${
          locked
            ? ""
            : "hover:bg-backgroundSecondary hover:shadow-lg transform transition-all"
        } ${active ? "border-2 shadow bg-backgroundPrimary" : ""}  `}
      >
        <div className="flex flex-col items-center justify-center col-span-2">
          {<NodeIcon completed={completed} locked={locked} type={type} />}{" "}
        </div>
        <div className="flex flex-col justify-center w-full col-span-5 p-4">
          <p className="">{title}</p>
          <p className="">{description}</p>
        </div>
        <Link href={"/studentPortal/courses/" + course + "/" + link}>
          <div
            className={`${
              active ? "" : "hidden"
            } flex flex-col col-span-5 justify-center p-4`}
          >
            <Button label="Continue" />
          </div>
        </Link>
      </div>
      <div
        className={`${
          hiddenLine ? "hidden" : ""
        } col-span-2  flex flex-col items-center w-full`}
      >
        <div
          className={`h-16 w-1 ${
            completed ? "bg-bulbasaur-500" : "bg-gray-500"
          }`}
        />
      </div>
    </div>
  );
};

export default UnitNodeView;
