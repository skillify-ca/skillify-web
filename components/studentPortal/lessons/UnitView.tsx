import React from "react";
import { Unit } from "../../../pages/api/studentPortal/units";
import FreemiumMessageNodeView from "../freemium/FreemiumMessageNodeView";
import SkeletonNodeView from "../freemium/SkeletonNodeView";
import UnitNodeView from "./UnitNodeView";

export type UnitViewProps = {
  data: Unit;
};

export const UnitView: React.FC<UnitViewProps> = ({ data }: UnitViewProps) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <p className="w-48 p-4 text-center text-white bg-blue-900 rounded-full">
        {data.title}
      </p>
      <div>
        {data.nodes.map((it, index) => {
          if (it.type === "freemiumMessage") {
            return (
              <FreemiumMessageNodeView
                hiddenLine={index === data.nodes.length - 1}
                type={it.type}
              />
            );
          } else if (it.type === "grayedOut") {
            return (
              <SkeletonNodeView
                hiddenLine={index === data.nodes.length - 1}
                type={it.type}
              />
            );
          } else {
            if (!it.locked) {
              return (
                <a href={"/studentPortal/" + it.link}>
                  <UnitNodeView
                    hiddenLine={index === data.nodes.length - 1}
                    completed={it.completed}
                    locked={it.locked}
                    title={it.title}
                    description={it.description}
                    type={it.type}
                  />
                </a>
              );
            } else {
              return (
                <UnitNodeView
                  hiddenLine={index === data.nodes.length - 1}
                  completed={it.completed}
                  locked={it.locked}
                  title={it.title}
                  description={it.description}
                  type={it.type}
                />
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default UnitView;
