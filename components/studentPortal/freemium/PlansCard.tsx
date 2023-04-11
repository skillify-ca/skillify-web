import React from "react";
import { Button } from "../../ui/Button";
import PlanRow, { PlanRowProps } from "./PlanRow";

export type PlansCardProps = {
  title: string;
  price: string;
  description: string;
  buttonLabel: string;
  onClick: () => void;
  optionalMessage?: string;
  planRowData: PlanRowProps[];
};

const PlansCard = ({
  price,
  description,
  buttonLabel,
  title,
  onClick,
  optionalMessage,
  planRowData,
}: PlansCardProps) => {
  return (
    <div className="flex flex-col w-[325px] md:w-[400px] space-y-4 transition-all transform border-t-2 text-textPrimary bg-backgroundPrimary shadow-lg cursor-pointer rounded-xl hover:scale-105 mb-4">
      <div className="flex items-center justify-center bg-rattata p-8 text-white font-bold text-2xl rounded-xl">
        {title}
      </div>
      <div className="flex flex-col items-center w-full">
        <p className="mb-4 font-bold text-2xl">{price}</p>
        <p>{description}</p>
        <p className="font-bold text-center p-4">WHAT'S INCLUDED</p>
        {planRowData.map((item, index) => {
          return (
            <PlanRow
              key={index}
              icon={item.icon}
              description={item.description}
            />
          );
        })}
        {optionalMessage && <p>{optionalMessage}</p>}
        <div className="my-4">
          <Button onClick={onClick} label={buttonLabel} />
        </div>
      </div>
    </div>
  );
};

export default PlansCard;
