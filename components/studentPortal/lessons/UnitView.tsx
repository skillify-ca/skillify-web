import React from "react";
import { Unit } from "../../../pages/api/studentPortal/units";
import UnitNodeView from "./UnitNodeView";

export type UnitViewProps = {
  data: Unit;
  userRole: "freemium" | "student" | "coach";
};

//These are hardcoded lists of the Units/Nodes that will be included with the Freemium version
const freemiumUnits = ["Introduction", "Github", "TailwindCSS", "React"];
const freemiumNodes = [
  "Intro to Web Development",
  "Deploying a Project on Github & Vercel",
  "TailwindCSS - Grid & Flexbox",
  "TailwindCSS - General Styling",
  "Components",
  "Props",
  "Components and Props",
  "Hooks - useState",
];
export const UnitView: React.FC<UnitViewProps> = ({
  data,
  userRole,
}: UnitViewProps) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {userRole === "freemium" && !freemiumUnits.includes(data.title) ? (
        <p className="w-48 h-14 bg-gray-300 rounded-full"></p>
      ) : (
        <p className="w-48 p-4 text-center text-white bg-blue-900 rounded-full">
          {data.title}
        </p>
      )}

      <div>
        {data.nodes.map((node, index) => {
          const grayedOut = !freemiumNodes.some((str) =>
            node.description.includes(str)
          );
          const nodeProps = {
            hiddenLine: index === data.nodes.length - 1,
            completed: node.completed,
            locked: node.locked,
            title: node.title,
            description: node.description,
            type: node.type,
            userRole: userRole,
            grayedOut: grayedOut,
            freemiumMessage:
              node.description === "Hooks - useState" && userRole === "freemium"
                ? true
                : false,
          };
          if (
            node.locked ||
            nodeProps.grayedOut === true ||
            nodeProps.freemiumMessage === true
          ) {
            return <UnitNodeView {...nodeProps} />;
          } else {
            return (
              <a href={"/studentPortal/" + node.link}>
                <UnitNodeView {...nodeProps} />
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};

export default UnitView;
