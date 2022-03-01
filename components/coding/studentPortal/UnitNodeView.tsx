import Link from "next/link";
import React, { useState } from "react";
import { UnitNode } from "../../../pages/api/studentPortal/units";

export type UnitNodeViewProps = {
  data: UnitNode;
};

export const UnitNodeView: React.FC<UnitNodeViewProps> = ({
  data,
}: UnitNodeViewProps) => {
  return (
    <div>
      <a href={data.link}>
        <div className="bg-blue-300 grid grid-cols-12">
          <div className="bg-red-300 flex justify-center items-center w-24 h-24 col-span-2 rounded-full m-4">
            {data.completed ? (
              <img src="/images/checkmark.png" />
            ) : data.locked ? (
              <img src="/images/lock.png" className="w-16" />
            ) : null}
          </div>
          <div className="flex flex-col col-span-10 justify-center">
            <p>{data.title}</p>
            <p>{data.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default UnitNodeView;
