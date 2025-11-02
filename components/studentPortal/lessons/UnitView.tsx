import React, { useState } from "react";
import { Unit } from "../../../pages/api/studentPortal/units";
import FreemiumDialogComponent from "../freemium/FreemiumDialogueComponent";
import FreemiumMessageNodeView from "../freemium/FreemiumMessageNodeView";
import SkeletonNodeView from "../freemium/SkeletonNodeView";
import UnitNodeView from "./UnitNodeView";

export type UnitViewProps = {
  data: Unit;
  course: string;
};

export const UnitView: React.FC<UnitViewProps> = ({
  data,
  course,
}: UnitViewProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-4">
      <p className="w-48 p-4 text-center text-white bg-blue-900 rounded-full">
        {data.title}
      </p>
      <div>
        {data.nodes.map((it, index) => {
          if (it.type === "grayedOut") {
            return (
              <SkeletonNodeView
                key={index}
                hiddenLine={index === data.nodes.length - 1}
                type={it.type}
              />
            );
          } else if (it.type === "freemiumMessage") {
            return (
              <div key={index}>
                <FreemiumMessageNodeView
                  hiddenLine={false}
                  type={"freemiumMessage"}
                  onClick={() => setIsModalOpen(true)}
                />
                {isModalOpen && (
                  <FreemiumDialogComponent
                    trigger={false}
                    startOnUpgradeModal
                    onClose={() => setIsModalOpen(false)}
                  />
                )}
              </div>
            );
          } else {
            return (
              <UnitNodeView
                key={it.title}
                hiddenLine={index === data.nodes.length - 1}
                completed={false}
                locked={it.locked}
                title={it.title}
                description={it.description}
                type={it.type}
                link={it.link ?? "undefined"}
                course={course}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default UnitView;
