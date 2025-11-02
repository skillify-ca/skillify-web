import Link from "next/link";
import React from "react";
import { Button } from "../../ui/Button";
import NodeIcon from "../../ui/NodeIcon";
import FreemiumDialogComponent from "../freemium/FreemiumDialogueComponent";

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

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="grid grid-cols-12 h-36">
      <div
        className={`
        col-span-12 grid grid-cols-12 h-28
        ${"hover:bg-backgroundSecondary hover:shadow-lg transform transition-all"
          } ${"border-2 shadow bg-backgroundPrimary"}  `}
      >
        <div className="flex flex-col items-center justify-center col-span-2">
          {<NodeIcon completed={completed} locked={locked} type={type} />}{" "}
        </div>
        <div className="flex flex-col justify-center w-full col-span-5 p-4">
          <p className="">{title}</p>
          <p className="">{description}</p>
        </div>
        <div
          className={`flex flex-col col-span-5 justify-center p-4`}
        >
          {locked ? (
            <Button label="Locked" disabled />
          ) :
            <Link href={"/studentPortal/courses/" + course + "/" + link}>
              <Button label="Continue" />
            </Link>
          }
          {isModalOpen && (
            <FreemiumDialogComponent
              trigger={false}
              startOnUpgradeModal
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </div>
      </div>
      <div
        className={`${hiddenLine ? "hidden" : ""
          } col-span-2  flex flex-col items-center w-full`}
      >
        <div
          className={`h-16 w-1 ${"bg-gray-500"}`}
        />
      </div>
    </div>
  );
};

export default UnitNodeView;
