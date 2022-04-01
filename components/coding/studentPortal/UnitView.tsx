import Link from "next/link";
import React, { useState } from "react";
import { Unit } from "../../../pages/api/studentPortal/units";
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
          if (!it.locked) {
            return (
              <Link href={it.link}>
                <UnitNodeView
                  hiddenLine={index === data.nodes.length - 1}
                  completed={it.completed}
                  locked={it.locked}
                  title={it.title}
                  description={it.description}
                  type={it.type}
                />
              </Link>
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
        })}
      </div>
    </div>
  );
};

export default UnitView;
