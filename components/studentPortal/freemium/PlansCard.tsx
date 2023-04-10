import React from "react";
import { Button } from "../../ui/Button";
import PlanRow, { PlanRowProps } from "./PlanRow";

export type PlansCardProps = {
  title: string;
  price: string;
  description: string;
  buttonLabel: string;
  onClick: () => void;
};

const planRowData: PlanRowProps[] = [
  {
    icon: "../../images/freemium/greenCheck.svg",
    description: "First Description",
  },
  {
    icon: "../../images/freemium/greenCheck.svg",
    description: "Second Description",
  },
  {
    icon: "../../images/freemium/greenCheck.svg",
    description: "Third Description",
  },
  {
    icon: "../../images/freemium/redX.svg",
    description: "Fourth Description",
  },
  {
    icon: "../../images/freemium/redX.svg",
    description: "Fifth Description",
  },
  {
    icon: "../../images/freemium/redX.svg",
    description: "Sixth Description what happens if this is really long to do ",
  },
];

const PlansCard = ({
  price,
  description,
  buttonLabel,
  title,
  onClick,
}: PlansCardProps) => {
  return (
    <div className="flex flex-col w-[375px] md:w-[500px] space-y-8 transition-all transform border-t-2 text-textPrimary bg-backgroundPrimary shadow-lg cursor-pointer rounded-xl hover:scale-105 mb-4">
      <div className="flex items-center justify-center bg-rattata p-8 text-white font-bold text-2xl rounded-xl">
        {title}
      </div>
      <div className="flex flex-col items-center w-full">
        <p className="mb-4 font-bold text-2xl">{price}</p>
        <p>{description}</p>
        <p className="font-bold text-center mt-10 p-6">WHAT'S INCLUDED</p>
        {planRowData.map((item, index) => {
          return (
            <PlanRow
              key={index}
              icon={item.icon}
              description={item.description}
            />
          );
        })}
        <div className="my-8">
          <Button onClick={onClick} label={buttonLabel} />
        </div>
      </div>
    </div>
  );
};
export default PlansCard;
