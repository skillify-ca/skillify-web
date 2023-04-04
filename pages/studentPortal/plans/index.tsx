import React, { ReactNode } from "react";
import PlansCard from "../../../components/studentPortal/freemium/PlansCard";

export interface PlansProps {
  children: ReactNode;
}

const Plans = ({ children }: PlansProps) => {
  return (
    <div>
      <div className="flex flex-col mt-24 items-center justify-center space-y-10">
        <h1 className="text-charmander text-3xl font-bold">
          Pick the Plan That's Right For You
        </h1>
        <p>Reserve your spot today!</p>
      </div>
      <PlansCard
        title={"Free 14-day Trial"}
        description={"No credit card required"}
        price={"$0"}
        buttonLabel={"Sign Up"}
      ></PlansCard>
    </div>
  );
};
export default Plans;
