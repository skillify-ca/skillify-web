import React from "react";

export type PlanRowProps = {
  icon: string;
  description: string;
};

const PlanRow = ({ icon, description }: PlanRowProps) => {
  return (
    <div className="grid w-full p-2 my-2 text-center shadow bg-backgroundPrimary rounded-xl grid-cols-7">
      <img src={icon} className="h-8 w-8 mb-2 mr-2 col-span-1" />
      <p className="col-span-6 text-left">{description}</p>
    </div>
  );
};

export default PlanRow;
