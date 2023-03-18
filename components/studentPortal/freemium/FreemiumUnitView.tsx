import React from "react";
import { Unit } from "../../../pages/api/studentPortal/units";
import UnitNodeView from "../lessons/UnitNodeView";
import { FreemiumMessageNodeView } from "./FreemiumMessageNodeView";
import SkeletonNodeView from "./SkeletonNodeView";

export type FreemiumUnitViewProps = {
  data: Unit;
};

export const FreemiumUnitView: React.FC<FreemiumUnitViewProps> = ({
  data,
}: FreemiumUnitViewProps) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <p className="w-48 p-4 text-center text-white bg-blue-900 rounded-full">
        {data.title}
      </p>
      <div>
        {data.nodes.map((node, index) => {
          if (node.type === "freemiumMessage") {
            return (
              <FreemiumMessageNodeView
                description={"hello"}
                hiddenLine={false}
              />
            );
          } else if (node.type === "grayedOut") {
            return <SkeletonNodeView hiddenLine={false} />
          } else if (node.locked === true) {
            return (
              <UnitNodeView
                title={node.title}
                description={node.description}
                completed={node.completed}
                locked={node.locked}
                hiddenLine={false}
                type={node.type}
              />
            );
          } else {
            return (
              <a href={"/studentPortal/" + node.link}>
                <UnitNodeView
                  title={node.title}
                  description={node.description}
                  completed={node.completed}
                  locked={node.locked}
                  hiddenLine={false}
                  type={node.type}
                />
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FreemiumUnitView;
