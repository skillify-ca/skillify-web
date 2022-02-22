import Link from "next/link";
import React, { useState } from "react";
import { Unit } from "../../pages/studentPortal";
import UnitNodeView from "./UnitNodeView";

export type UnitViewProps = {
  data: Unit;
};

export const UnitView: React.FC<UnitViewProps> = ({ data }: UnitViewProps) => {
  return (
    <div className="bg-gray-300 grid grid-cols-1 gap-4">
      <p>{data.title}</p>
      {data.nodes.map((it) => (
        <UnitNodeView data={it} />
      ))}
    </div>
  );
};

export default UnitView;
