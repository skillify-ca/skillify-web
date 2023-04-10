import React, { ReactNode } from "react";
import PlansCard, {
  PlansCardProps,
} from "../../../components/studentPortal/freemium/PlansCard";

export interface PlansProps {
  children: ReactNode;
}

const Plans = ({ children }: PlansProps) => {
  const plansCardData: PlansCardProps[] = [
    {
      title: "Card 1",
      description: "desc 1",
      price: "$0",
      buttonLabel: "Sign Up",
      onClick: () => console.log("clicked"),
    },
    {
      title: "Card 2",
      description: "desc 2",
      price: "more",
      buttonLabel: "Book a Call",
      onClick: () => console.log("clicked"),
    },
  ];

  return (
    <div>
      <div>
        <div className="flex flex-col mt-24 items-center justify-center space-y-10 mb-12">
          <h1 className=" text-charmander text-3xl font-bold text-center p-4">
            Pick the Plan That's Right For You
          </h1>
          <p>Reserve your spot today!</p>
        </div>
        <div className="flex md:flex-row flex-col md:space-x-10 space-x-0 items-center justify-center">
          {plansCardData.map((card) => (
            <PlansCard
              key={card.title}
              title={card.title}
              description={card.description}
              price={card.price}
              buttonLabel={card.buttonLabel}
              onClick={card.onClick}
            ></PlansCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
