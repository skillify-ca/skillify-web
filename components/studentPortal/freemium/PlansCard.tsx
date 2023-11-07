import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../../../lib/authContext";
import { PlanCard } from "../../../pages/plans";
import { Button } from "../../ui/Button";
import PlanRow from "./PlanRow";

export type PlansCardProps = {
  planCard: PlanCard;
};

const PlansCard = ({ planCard }: PlansCardProps) => {
  const { planName, title, price, description, planCardRow, buttonLabel } =
    planCard;

  const { signIn, user } = useAuth();
  const router = useRouter();

  const handleSignUp = (planName: string) => {
    if (planName === "premium") {
      router.push("https://www.joinskillify.com/call");
    } else {
      signIn();
    }
  };

  return (
    <div className="flex flex-col w-[325px] md:w-[400px] space-y-4 shadow-lg cursor-pointer rounded-xl transition-all hover:scale-105">
      <div className="flex justify-center p-6 text-2xl font-bold text-white bg-rattata rounded-t-xl">
        {title}
      </div>
      <div className="flex flex-col items-center w-full bg-white">
        <p className="mb-4 text-2xl font-bold">{price}</p>
        <p>{description}</p>
        <p className="p-4 font-bold text-center">WHAT'S INCLUDED</p>
        {planCardRow.map((item, index) => {
          return (
            <PlanRow
              key={index}
              icon={item.icon}
              description={item.description}
            />
          );
        })}
        <div className="p-4">
          <Button
            onClick={() => handleSignUp(planName)}
            label={buttonLabel}
            backgroundColor={planName === "premium" ? "white" : "yellow"}
            textColor="text-gray-800"
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default PlansCard;
