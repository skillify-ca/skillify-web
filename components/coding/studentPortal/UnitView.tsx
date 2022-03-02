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
      <p className="bg-blue-900 w-48 p-4 text-white rounded-full text-center">
        {data.title}
      </p>
      <div>
        {data.nodes.map((it, index) => (
          <UnitNodeView
            hiddenLine={index === data.nodes.length - 1}
            link={it.link}
            completed={it.completed}
            locked={it.locked}
            title={it.title}
            description={it.description}
          />
        ))}
      </div>
    </div>
  );
};

export default UnitView;
