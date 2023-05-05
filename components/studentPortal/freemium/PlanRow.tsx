import React from "react";

export type PlanRowProps = {
  icon: string;
  description: string;
};

const PlanRow = ({ icon, description }: PlanRowProps) => {
  return (
    <div className="grid w-full grid-cols-7 p-2 my-1 text-center shadow bg-backgroundPrimary">
      <img src={icon} className="w-8 h-8 col-span-1 mx-4" />
      <p className="col-span-6 mx-4 text-left">{description}</p>
    </div>
  );
};

export default PlanRow;
