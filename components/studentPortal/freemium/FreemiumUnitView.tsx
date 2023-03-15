import React from "react";
import { Unit } from "../../../pages/api/studentPortal/units";
import FreemiumUnitNodeView from "./FreemiumUnitNodeView";

export type FreemiumUnitViewProps = {
  data: Unit;
};

const freemiumNodes = [""];
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
          const grayedOut = freemiumNodes.some(
            (str) =>
              node.description.indexOf(str) !== -1 && node.description === str
          );
          const nodeProps = {
            hiddenLine: index === data.nodes.length - 1,
            completed: node.completed,
            locked: node.locked,
            title: node.title,
            description: node.description,
            type: node.type,
            grayedOut: grayedOut,
            freemiumMessage:
              node.description === "Enjoying the Skillify Experience?"
                ? true
                : false,
          };
          if (
            node.locked ||
            nodeProps.grayedOut === true ||
            nodeProps.freemiumMessage === true
          ) {
            return <FreemiumUnitNodeView {...nodeProps} />;
          } else {
            return (
              <a href={"/studentPortal/" + node.link}>
                <FreemiumUnitNodeView {...nodeProps} />
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FreemiumUnitView;
