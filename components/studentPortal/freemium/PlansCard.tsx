import React from "react";
import { Button } from "../../ui/Button";
import PlanRow from "./PlanRow";

export type PlansCardProps = {
  title: string;
  price: string;
  description: string;
  buttonLabel: string;
};

const planRowData: PlanRowProps[] = [
  {
    icon: "../../images/freemium/greenCheck.svg",
    description: "First Description",
  },
  {
    icon: "../../images/freemium/redX.svg",
    description: "Second Description",
  },
];

const PlansCard = ({
  price,
  description,
  buttonLabel,
  title,
}: PlansCardProps) => {
  return (
    <div className="flex flex-col w-[400px] h-[1000px] transition-all transform border-t-8 text-textPrimary bg-backgroundPrimary shadow-lg cursor-pointer rounded-xl hover:scale-110">
      <div className="flex items-center justify-center bg-rattata p-8 rounded-xl">
        {title}
      </div>
      <div className="flex flex-col items-center">
        <p className="mb-4 font-bold">{price}</p>
        <p className="">{description}</p>
        {planRowData.map((item, index) => {
          return (
            <PlanRow
              key={index}
              icon={item.icon}
              description={item.description}
            />
          );
        })}

        <Button label={buttonLabel} />
      </div>
    </div>
  );
};
export default PlansCard;
