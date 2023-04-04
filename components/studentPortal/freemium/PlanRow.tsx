import React from "react";

export type PlanRowProps = {
  icon: string;
  description: string;
};

const PlanRow = ({ icon, description }: PlanRowProps) => {
  return (
    <div className="grid justify-center w-full p-4 my-4 text-center shadow bg-backgroundPrimary rounded-xl sm:grid-cols-6">
      <div className="flex flex-row items-center">
        <img src={icon} className="h-8 w-8 mb-2 mr-2" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PlanRow;
